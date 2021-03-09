import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../Header/Header';
import styles from './WriteStory.module.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

function WriteStory(props) {
    const storyTitle = useRef();
    const storyLocation = useRef();
    const editorRef = useRef();
    const [preload, setPreload] = useState({ mainCategory: [], subCategory: [] })
    const [input, setInput] = useState({ mainCategory: "", subCategory: "", title: "", location: "", content: "" })
    useEffect(() => {
        // get Main Categories
        axios
            .get('/api/read/categories?data=main')
            .then((res) => {
                setPreload(prevPreload => {
                    return {
                        mainCategory: res.data.mainCategory,
                        subCategory: prevPreload.subCategory
                    }
                })
            })
            .catch((err) => { console.error(err) });

        // Get current Story Idx
        let curStoryIdx = -1;
        axios
            .get('/api/getinfo/nextstoryidx')
            .then(res => {
                curStoryIdx = res.data.idx;
            })
            .catch(err => console.log(err))

            document.querySelector('.CodeMirror').addEventListener('keyup', e => {
            if (e.ctrlKey && e.altKey) {
                if (curStoryIdx === -1)
                    return alert('try again later')
                if (e.key === 'i') {
                    editorRef.current.getInstance().insertText('<img src="/story/' + curStoryIdx + '/1.jpg" width=800 ></img>');
                } else if (e.key === 'g') {
                    editorRef.current.getInstance().insertText('<figure><img src="/story/' + curStoryIdx + '/1.jpg" width=800 ></img><figcaption></figcaption></figure>');
                }
            } else if (e.ctrlKey && e.key === 'v') {
                e.preventDefault();
            }
        })
        // check tmpStory
        if (props.match.params.id) {
            axios
                .post("/api/read/tmpstory", { id: props.match.params.id })
                .then(async (res) => {
                    editorRef.current.getInstance().setHtml(res.data[0].content, true)
                    await axios
                        .get('/api/read/categories?data=sub&mainId=' + res.data[0].mainCatIdx)
                        .then((res) => {
                            setPreload(prevPreload => {
                                return {
                                    mainCategory: prevPreload.mainCategory,
                                    subCategory: res.data.subCategory
                                }
                            })
                            // console.log(this.state)
                        })
                        .catch((err) => { console.error(err) });
                    document.querySelector('.mainCategory').value = res.data[0].mainCatIdx;
                    document.querySelector('.subCategory').value = res.data[0].subCatIdx;
                    storyTitle.current.value = res.data[0].title
                    storyLocation.current.value = res.data[0].location
                })
                .catch(err => console.log(err))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getSubCategory = (e) => {
        axios
            .get('/api/read/categories?data=sub&mainId=' + e.target.value)
            .then((res) => {
                setPreload(prevPreload => {
                    return {
                        mainCategory: prevPreload.mainCategory,
                        subCategory: res.data.subCategory
                    }
                })
                // console.log(this.state)
            })
            .catch((err) => { console.error(err) });
    }
    const handleUpdate = () => {
        let nextState = {};
        nextState = {};
        nextState['mainCategory'] = document.getElementsByClassName('mainCategory')[0].value;
        nextState['subCategory'] = document.getElementsByClassName('subCategory')[0].value;
        nextState['title'] = document.getElementsByTagName('input')[0].value;
        nextState['location'] = document.getElementsByTagName('input')[1].value;
        nextState['content'] = editorRef.current.getInstance().getHtml();
        setInput(nextState)
    }
    const handleTmpSubmit = () => {
        const data = {
            idx: props.match.params.id ? props.match.params.id : -1,
            main: input.mainCategory,
            sub: input.subCategory,
            title: input.title,
            location: input.location,
            content: input.content
        };
        if (data.main === '-1' || data.sub === '-1')
            return alert('카테고리를 선택해주세요');

        axios
            .post('/api/write/tmpstory', data)
            .then((res) => {
                window.location.reload();
            })
            .catch((err) => { console.error(err) });
    }
    const handleSubmit = () => {
        const data = {
            main: input.mainCategory,
            sub: input.subCategory,
            title: input.title,
            location: input.location,
            content: input.content
        };
        if (data.main === '-1' || data.sub === '-1')
            return alert('카테고리를 선택해주세요');

        axios
            .post('/api/write/story', data)
            .then((res) => {
                window.location.reload();
            })
            .catch((err) => { console.error(err) });
    }
    return (
        <>
            <Header />
            <div className="storyContainer">
                <select name='mainCategory' className='mainCategory' onChange={getSubCategory}>
                    <option value="-1">선택</option>
                    {preload.mainCategory.map((val, idx) => {
                        return (
                            <option value={val.mainIdx}>{val.mainCategory}</option>
                        )
                    })}
                </select>
                <select name='subCategory' className='subCategory' onChange={handleUpdate}>
                    <option value="-1">선택</option>
                    {preload.subCategory.map((val, idx) => {
                        return (
                            <option value={val.subIdx}>{val.subCategory}</option>
                        )
                    })}
                </select>
                <input
                    ref={storyTitle}
                    className={styles.storyTitle}
                    placeholder="제목을 입력하세요"
                    onChange={handleUpdate}
                />
                <input
                    ref={storyLocation}
                    className={styles.storyLocation}
                    placeholder="장소를 입력하세요"
                    onChange={handleUpdate}
                />
                <Editor
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="markdown"
                    ref={editorRef}
                    onChange={handleUpdate}
                    useCommandShortcut={true}
                />
                <button onClick={handleTmpSubmit}>임시저장</button>
                <button onClick={handleSubmit}>제출</button>
            </div>
        </>
    )
}
export default withRouter(WriteStory);
