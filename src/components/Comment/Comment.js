import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Comment.module.scss';
import WriteAnonyComment from './WriteComment/WriteAnonyComment';
import SubComment from './SubComment/SubComment';
import MainComment from './MainComment/MainComment';
import MainCommentNoSub from './MainComment/MainCommentNoSub';
import WriteSubComment from './WriteComment/WriteSubComment';
import axios from 'axios';

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            commentCnt: 0,
            comment: [],
        }
    }
    componentDidMount() {
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
                    {this.state.comment.map((val, idx, elem) => {
                        { // idx == 0 && 답글 잇는 댓글 전처리 
                            if (!idx && val.subContent) {
                                return (
                                    <div className={styles.MainSubCommentContainer}>
                                        <MainComment
                                            key={val.mainIdx}
                                            writer={val.mainWriter == '-1' ? '익명' : val.mainWriter}
                                            date={val.mainDate}
                                            content={val.mainContent} />
                                        <div className={styles.SubCommentWrapper}>
                                            {elem.filter(val1 => val.commentId === val1.commentId).reverse().map((val2, idx2) => {
                                                return (
                                                    <SubComment
                                                        key={val.mainIdx + "_" + val2.subIdx}
                                                        writer={val2.subWriter}
                                                        date={val2.subDate}
                                                        content={val2.subContent} />
                                                );
                                            })}
                                            <WriteSubComment
                                                targetMainId={val.mainIdx}
                                                isHide={""}
                                            />
                                        </div>
                                    </div>
                                );
                            }
                            // 답글 없는 댓글
                            else if (!val.subContent)
                                return (
                                    <div className={styles.MainSubCommentContainer}>
                                        <MainCommentNoSub
                                            key={val.mainIdx}
                                            writer={val.mainWriter == '-1' ? '익명' : val.mainWriter}
                                            date={val.mainDate}
                                            content={val.mainContent} />
                                        <div className={styles.SubCommentWrapper + " hide"}>
                                            <WriteSubComment
                                                targetMainId={val.mainIdx}
                                                isHide={""}
                                            />
                                        </div>
                                    </div>
                                );
                            // idx == 0은 아닌 답글 있는 댓글
                            else if (val.commentId !== elem[idx - 1].commentId) {
                                return (
                                    <div className={styles.MainSubCommentContainer}>
                                        <MainComment
                                            key={val.mainIdx}
                                            writer={val.mainWriter == '-1' ? '익명' : val.mainWriter}
                                            date={val.mainDate}
                                            content={val.mainContent} />
                                        <div className={styles.SubCommentWrapper}>
                                            {elem.filter(val1 => val.commentId === val1.commentId).map((val2, idx2) => {
                                                return (
                                                    <SubComment
                                                        key={val.mainIdx + "_" + val2.subIdx}
                                                        writer={val2.subWriter}
                                                        date={val2.subDate}
                                                        content={val2.subContent} />
                                                );
                                            })}
                                            <WriteSubComment
                                                targetMainId={val.mainIdx}
                                                isHide={""}
                                            />
                                        </div>
                                    </div>
                                );
                            }
                        }
                    })}
                </div>
                <WriteAnonyComment />
            </div>
        )
    }
}
export default Comment;
