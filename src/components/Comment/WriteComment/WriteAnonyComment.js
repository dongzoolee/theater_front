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
        else {
            this.setState({
                content: e.target.innerHTML
            })
        }
    }
    handleSubmit = (e) => {
        let url = window.location.href;
        let urlSplit = url.split('/');
        const data = {
            storyId: urlSplit[urlSplit.indexOf('story') + 1],
            writer: this.state.writer,
            content: this.state.content || e.target.parentElement.parentElement.querySelector('.commentWriteContainer').innerHTML
        };

        if (data.writer === "")
            return alert('이름을 입력해주세요');
        else if (data.content.trim().replace(/&nbsp;/g, '') === "")
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
                            console.log(e.target.closest('.' + styles.header))
                            e.target.closest('.' + styles.header).firstElementChild.value = "";
                            e.target.closest('.' + styles.header).parentElement.lastElementChild.innerHTML = "";
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
        document.querySelectorAll('.' + styles.writerAnony).forEach(ele => {
            ele.addEventListener('keydown', e => {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    ele.closest('.' + styles.container).querySelector('.commentWriteContainer').focus()
                }
            })
        })
        document.querySelectorAll('.commentWriteContainer').forEach(ele => {
            ele.addEventListener('keydown', e => {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    ele.closest('.' + styles.container).querySelector('.' + styles.commitBtn).focus()
                }
            })
        })
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
                        <button className={styles.commitBtn + " non--draggable"} onClick={this.handleSubmit}>커밋</button>
                    </div>
                    <div className="commentWriteContainer" contentEditable="true" onKeyUp={e => this.onChangeEvent(e)} />
                </div>
            </div>
        )
    }
}
export default WriteComment;
