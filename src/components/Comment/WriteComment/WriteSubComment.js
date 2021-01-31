import React, { Component } from 'react';
import styles from './WriteSubComment.module.scss';
import axios from 'axios';

class WriteSubComment extends Component {
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
        else if (e.target.tagName === "TEXTAREA")
            this.setState({
                content: e.target.value
            })
    }
    handleSubmit = (e) => {
        let url = window.location.href;
        let urlSplit = url.split('/');
        const data = {
            targetMainId: this.props.targetMainId,
            storyId: urlSplit[urlSplit.indexOf('story') + 1],
            writer: this.state.writer,
            content: this.state.content
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
                        .post('/api/write/anonysubcomment', data)
                        .then((res) => {
                            this.props.OnCommentSubmit('done')
                            e.target.closest('.' + styles.header).firstElementChild.value = "";
                            e.target.closest('.' + styles.header).parentElement.lastElementChild.value = "";
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
    componentDidMount() {
        if (this.props.isHide);

    }
    render() {
        return (
            <div className={styles.container + " " + this.props.isHide}>
                <div className={styles.header}>
                    <input className={styles.writerAnony} maxLength="18" placeholder="이름을 입력하세요" onChange={this.onChangeEvent} />
                    <div className={styles.date}>{[new Date().getFullYear(), "년 ", new Date().getMonth() + 1, "월 ", new Date().getDate(), "일"]}</div>
                    <div className={styles.flexGrow} />
                    <div className={styles.emoji}></div>
                    <div className={styles.commitBtn + " non--draggable"} onClick={(e) => { this.handleSubmit(e) }}>커밋</div>
                </div>
                <textarea className={styles.content} onChange={this.onChangeEvent} />
            </div>
        )
    }
}
export default WriteSubComment;
