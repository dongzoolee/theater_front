import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './WriteAnonyComment.module.scss';
import axios from 'axios';

class WriteComment extends Component {
    constructor() {
        super();
        this.state = {
            storyId: "",
            writer: "",
            content: "",
            ip: ""
        }
    }
    componentDidMount = () => {
        let url = window.location.href;
        let urlSplit = url.split('/');
        this.setState({
            storyId: urlSplit[urlSplit.indexOf('story') + 1]
        })
        axios
            .get('https://api.ipify.org?format=json')
            .then(res => {
                console.log(res)
                this.setState({
                    ip: res.data.ip
                })
            })
            .catch(err => { })
    }
    onChangeEvent = () => {
        this.setState({
            writer: document.querySelector('input').value,
            content: document.querySelector('textarea').value
        })
    }
    handleSubmit = () => {
        const data = {
            storyId: this.state.storyId,
            writer: this.state.writer,
            content: this.state.content,
            ip: this.state.ip
        };
        if (data.writer === "")
            return alert('이름을 입력해주세요');
        else if (data.content === "")
            return alert('내용을 입력해주세요');
        else
            axios
                .post('/api/write/anonycomment', data)
                .then((res) => {
                    window.location.reload();
                })
                .catch((err) => { console.error(err) });
    }
    render() {
        return (
            <div className={styles.colorContainer}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <input className={styles.writer} maxLength="18" placeholder="이름을 입력하세요" onChange={this.onChangeEvent} />
                        <div className={styles.date}>{[new Date().getFullYear(), "년 ", new Date().getMonth() + 1, "월 ", new Date().getDate(), "일"]}</div>
                        <div className={styles.flexGrow} />
                        <div className={styles.emoji}></div>
                        <div className={styles.commitBtn} onClick={this.handleSubmit}>커밋</div>
                    </div>
                    <textarea className={styles.content} onChange={this.onChangeEvent} />
                </div>
            </div>
        )
    }
}
export default WriteComment;
