import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../Header/Header';
import styles from './WriteStory.module.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';

class WriteStory extends Component {
    editorRef = React.createRef();
    constructor() {
        super();
        this.state = {
            preload: {
                mainCategory: [],
                subCategory: []
            },
            input: {
                mainCategory: "",
                subCategory: "",
                title: "",
                location: "",
                content: "",
            }
        }
    }
    componentDidMount() {
        // get Main Categories
        console.log(this.state)
        axios
            .get('/api/read/categories?data=main')
            .then((res) => {
                this.setState({
                    preload: {
                        mainCategory: res.data.mainCategory,
                        subCategory: this.state.preload.subCategory
                    }
                })
            })
            .catch((err) => { console.error(err) });
    }
    getSubCategory = (e) => {
        axios
            .get('/api/read/categories?data=sub&mainId=' + e.target.value)
            .then((res) => {
                this.setState({
                    preload: {
                        mainCategory: this.state.preload.mainCategory,
                        subCategory: res.data.subCategory
                    }
                })
                console.log(this.state)
            })
            .catch((err) => { console.error(err) });
    }
    handleUpdate = () => {
        let nextState = {};
        nextState['input'] = {};
        nextState['input']['mainCategory'] = document.getElementsByClassName('mainCategory')[0].value;
        nextState['input']['subCategory'] = document.getElementsByClassName('subCategory')[0].value;
        nextState['input']['title'] = document.getElementsByTagName('input')[0].value;
        nextState['input']['location'] = document.getElementsByTagName('input')[1].value;
        nextState['input']['content'] = this.editorRef.current.getInstance().getHtml();
        this.setState(nextState)
    }
    handleSubmit = () => {
        const data = {
            main: this.state.input.mainCategory,
            sub: this.state.input.subCategory,
            title: this.state.input.title,
            location: this.state.input.location,
            content: this.state.input.content
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
    render() {
        return (
            <>
                <Header />
                <div className="storyContainer">
                    <select name='mainCategory' className='mainCategory' onChange={e => { this.getSubCategory(e) }}>
                        <option value="-1">선택</option>
                        {this.state.preload.mainCategory.map((val, idx) => {
                            return (
                                <option value={val.mainIdx}>{val.mainCategory}</option>
                            )
                        })}
                    </select>
                    <select name='subCategory' className='subCategory'>
                        <option value="-1">선택</option>
                        {this.state.preload.subCategory.map((val, idx) => {
                            return (
                                <option value={val.subIdx}>{val.subCategory}</option>
                            )
                        })}
                    </select>
                    <input
                        className={styles.storyTitle}
                        placeholder="제목을 입력하세요"
                        onChange={this.handleUpdate}
                    />
                    <input
                        className={styles.storyLocation}
                        placeholder="장소를 입력하세요"
                        onChange={this.handleUpdate}
                    />
                    <Editor
                        previewStyle="vertical"
                        height="600px"
                        initialEditType="markdown"
                        ref={this.editorRef}
                        onChange={this.handleUpdate}
                        
                    />
                    <button >임시저장</button>
                    <button onClick={this.handleSubmit}>제출</button>
                </div>
            </>
        )
    }
}
export default withRouter(WriteStory);
