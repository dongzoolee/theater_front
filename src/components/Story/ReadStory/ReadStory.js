import React, { useRef, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Story from '../Story'
import Comment from '../../Comment/Comment'
import '../../Story.css';
import Footer from '../../Footer/Footer'
import styles from './ReadStory.module.scss';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/a11y-dark.css'
import js_hljs from 'highlight.js/lib/languages/javascript';
import yaml_hljs from 'highlight.js/lib/languages/yaml';
import docker_hljs from 'highlight.js/lib/languages/dockerfile';
import shell_hljs from 'highlight.js/lib/languages/shell';
import sql_hljs from 'highlight.js/lib/languages/sql';
import Layout from '../../Layout';

hljs.registerLanguage('sql', sql_hljs);
hljs.registerLanguage('lang-js', js_hljs);
hljs.registerLanguage('lang-yaml', yaml_hljs);
hljs.registerLanguage('lang-docker', docker_hljs);
hljs.registerLanguage('shell', shell_hljs);
hljs.registerLanguage('git', shell_hljs);

function ReadStory(props) {
    const adfit = useRef();
    const [outerColor, setOuterColor] = useState("")
    const [innerColor, setInnerColor] = useState("")
    const [mainCategory, setMainCategory] = useState("")
    const [subCategory, setSubCategory] = useState("")
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const [content, setContent] = useState("")
    const [commentCnt, setCommentCnt] = useState("")
    const [comment, setComment] = useState([])

    useEffect(() => {
        // GET Story
        axios
            .get('https://ip.leed.at')
            .then(res => {
                axios
                    .post('/api/read/story',
                        {
                            id: props.match.params.id,
                            ip: res.data.ip
                        })
                    .then((res) => {
                        setOuterColor(res.data.outerColor)
                        setInnerColor(res.data.innerColor)
                        setMainCategory(res.data.mainCategory)
                        setSubCategory(res.data.subCategory)
                        setTitle(res.data.title)
                        setDate(res.data.date)
                        setLocation(res.data.location)
                        setContent(res.data.content)
                        document.getElementsByTagName('html')[0].style = "background-color: " + res.data.outerColor + ";";
                        document.getElementsByClassName('storyContainer')[0].style = "background-color: " + res.data.innerColor + ";";
                    })
            })
        // GET Comments
        axios
            .post('/api/read/comment', { id: props.match.params.id })
            .then((res) => {
                setCommentCnt(res.data.cnt)
                setComment(res.data.comment)
            })
            .catch((err) => {
                console.error(err);
            })
        let ins = document.createElement('ins');
        let scr = document.createElement('script');
        ins.className = 'kakao_ad_area';
        ins.style = "display:none; width:100%;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        if (window.matchMedia('(min-width: 875px)').matches) {
            ins.setAttribute('data-ad-width', '728');
            ins.setAttribute('data-ad-height', '90');
            ins.setAttribute('data-ad-unit', 'DAN-zrThBYMLPyPfF7zx');
        } else {
            ins.setAttribute('data-ad-width', '320');
            ins.setAttribute('data-ad-height', '50');
            ins.setAttribute('data-ad-unit', 'DAN-CyjKlg2fzvV9gtXU');
        }
        adfit.current.appendChild(ins)
        adfit.current.appendChild(scr)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        document.querySelectorAll('img').forEach(ele => {
            ele.setAttribute('draggable', 'false')
            ele.style.maxWidth = "100%";
        })
        highlight();
    })
    const highlight = () => {
        document.querySelectorAll('pre').forEach(ele => {
            console.log(ele)
            hljs.highlightBlock(ele);
        })
    }
    return (
        <Layout>
            <div className="storyContainer">
                <Story
                    outerColor={outerColor}
                    innerColor={innerColor}
                    mainCategory={mainCategory}
                    subCategory={subCategory}
                    storyTitle={title}
                    storyDate={date}
                    storyLocation={location}
                    storyContent={[content]}
                />
                <div
                    ref={adfit}
                    className={styles.adfit}
                />
                <Comment
                    commentCnt={commentCnt}
                    comment={comment}
                />
            </div>
            <Footer />
        </Layout>
    );
}
export default withRouter(ReadStory);
