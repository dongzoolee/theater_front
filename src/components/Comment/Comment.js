import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Comment.module.scss';
import WriteAnonyComment from './WriteComment/WriteAnonyComment';
import SubComment from './SubComment/SubComment';
import MainComment from './MainComment/MainComment';
import axios from 'axios';

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            commentCnt: 0,
            comment: [],
        }
    }
    componentDidMount = () => {
        let url = window.location.href;
        let urlSplit = url.split('/');
        axios
            .post('/api/read/comment', { id: urlSplit[urlSplit.indexOf('story') + 1] })
            .then(res => {
                this.setState({
                    commentCnt: res.data.cnt,
                    comment: res.data.comment
                })
                console.log(this.state.comment)
            })
            .catch(err => {
                console.error(err);
            })
    }
    render() {
        return (
            <div className={styles.commentContainer}>
                <div className={styles.commentCount}>댓글 {this.state.commentCnt}개</div>
                <div className={styles.MainSubCommentWrapper}>
                    {this.state.comment.map((val, idx) => {
                        return (
                            <>
                                <MainComment
                                    writer={val.writer == '-1' ? '익명' : val.writer}
                                    date={val.date}
                                    content={val.content} />
                                {/* <div className={styles.SubCommentWrapper}>
                                    <SubComment />
                                </div> */}
                            </>
                        );
                    })}
                </div>
                <WriteAnonyComment />
            </div>
        )
    }
}
export default Comment;
