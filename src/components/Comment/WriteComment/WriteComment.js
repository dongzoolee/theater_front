import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './WriteComment.module.scss';
import axios from 'axios';

class WriteComment extends Component {
    constructor() {
        super();
        this.state = {
            outerColor: "",
            innerColor: "",
            mainCategory: "",
            subCategory: "",
            title: "",
            date: "",
            location: "",
            content: "",
            commentCnt: "",
            comment: []
        }
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

            })
            .catch((err) => { console.error(err) });
    }
    render() {
        return (
            <div className={styles.colorContainer}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.writer}>{this.props.writer}</div>
                        <div className={styles.date}>{this.props.date}</div>
                        <div className={styles.flexGrow} />
                        <div className={styles.emoji}></div>
                        <div className={styles.commitBtn}>커밋</div>
                    </div>
                    <textarea className={styles.content} />
                </div>
            </div>
        )
    }
}
export default WriteComment;
