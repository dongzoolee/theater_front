import React, { Component } from 'react';
import styles from './WriteComment.module.scss';
import axios from 'axios';

class WriteComment extends Component {
    constructor() {
        super();
        this.state = {
            writer: "",
            content: ""
        }
    }
    onChangeEvent = (e) => {
        if (e.target.tagName === "INPUT")
            this.setState({
                writer: e.target.value
            })
        else if(e.target.tagName === "TEXTAREA")
            this.setState({
                content: e.target.value
            })
    }
    handleSubmit = () => {
        let url = window.location.href;
        let urlSplit = url.split('/');
        const data = {
            storyId: urlSplit[urlSplit.indexOf('story') + 1],
            writer: this.state.writer,
            content: this.state.content,
        };

        if (data.writer === "")
            return alert('이름을 입력해주세요');
        else if (data.content === "")
            return alert('내용을 입력해주세요');
        else {
            axios
                .get('https://ip.leed.at')
                .then(res => {
                    data.ip = res.data.ip;
                    axios
                        .post('/api/write/anonycomment', data)
                        .then((res) => {
                            //window.location.reload();
                            this.props.OnCommentSubmit('done')
                            document.querySelector('.' + styles.writerAnony).value = "";
                            document.querySelector('.' + styles.content).value = "";
                            this.setState({
                                writer: "",
                                content: ""
                            })
                        })
                        .catch((err) => { console.error(err) });
                })
                .catch(err => { })

        }
    }
    render() {
        return (
            <div className={styles.colorContainer}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <input className={styles.writerAnony} maxLength="18" placeholder="이름을 입력하세요" onChange={this.onChangeEvent} />
                        <div className={styles.date}>{[new Date().getFullYear(), "년 ", new Date().getMonth() + 1, "월 ", new Date().getDate(), "일"]}</div>
                        <div className={styles.flexGrow} />
                        <div className={styles.emoji}></div>
                        <div className={styles.commitBtn + " non--draggable"} onClick={this.handleSubmit}>커밋</div>
                    </div>
                    <textarea className={styles.content} onChange={this.onChangeEvent} />
                </div>
            </div>
        )
    }
}
export default WriteComment;
