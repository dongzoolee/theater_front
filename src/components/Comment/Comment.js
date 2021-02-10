import React, { useState, useEffect } from 'react';
import styles from './Comment.module.scss';
import WriteAnonyComment from './WriteComment/WriteAnonyComment';
import SubComment from './SubComment/SubComment';
import MainComment from './MainComment/MainComment';
import WriteSubComment from './WriteComment/WriteSubComment';
import axios from 'axios';
import socketio from 'socket.io-client';
const socket = socketio.connect('https://blogserver.soga.ng/');

function Comment(props) {
    const [commentCnt, setCommentCnt] = useState(0)
    const [comment, setComment] = useState([])
    const [commentCng, setCommentCng] = useState(0)
    useEffect(() => {
        socket.emit('comment-cng');
        let url = window.location.href;
        let urlSplit = url.split('/');
        axios
            .post('/api/read/comment', { id: urlSplit[urlSplit.indexOf('story') + 1] })
            .then(res => {
                setCommentCnt(res.data.cnt)
                setComment(res.data.comment)
            })
            .catch(err => {
                console.error(err);
            })
    }, [commentCng])
    useEffect(() => {
        let url = window.location.href;
        let urlSplit = url.split('/');
        axios
            .post('/api/read/comment', { id: urlSplit[urlSplit.indexOf('story') + 1] })
            .then(res => {
                setCommentCnt(res.data.cnt)
                setComment(res.data.comment)
            })
            .catch(err => {
                console.error(err);
            })
        socket.on('update-comment', () => {
            UpdateComment();
        })
    }, [])
    const UpdateComment = () => {
        let url = window.location.href;
        let urlSplit = url.split('/');
        axios
            .post('/api/read/comment', { id: urlSplit[urlSplit.indexOf('story') + 1] })
            .then(res => {
                setCommentCnt(res.data.cnt)
                setComment(res.data.comment)
            })
            .catch(err => {
                console.error(err);
            })
    }
    const OnCommentSubmit = (data) => {
        if (data === 'done') {
            setCommentCng(prevCommentCng => {
                return prevCommentCng + 1
            })
        }
    }
    return (
        <div className={styles.commentContainer}>
            <div className={styles.commentCount}>댓글 {commentCnt}개</div>
            <div className={styles.MainSubCommentWrapper} id="comments">
                {comment.map((val, idx, elem) => {
                    // idx == 0 && 답글 잇는 댓글 전처리 
                    if (!idx && val.subContent) {
                        return (
                            <div className={styles.MainSubCommentContainer} key={val.mainIdx}>
                                <MainComment
                                    hasSubComment={true}
                                    parentClass={styles.MainSubCommentContainer}
                                    key={val.mainIdx}
                                    commentId={val.mainIdx}
                                    writer={val.mainWriter === '-1' ? '익명' : val.mainWriter}
                                    date={val.mainDate}
                                    content={val.mainContent}
                                    report={val.mainReport} />
                                <div className={styles.SubCommentWrapper}>
                                    {elem.filter(val1 => val.commentId === val1.commentId).map((val2, idx2) => {
                                        return (
                                            <SubComment
                                                key={val.mainIdx + "_" + val2.subIdx}
                                                commentId={val.mainIdx + "_" + val2.subIdx}
                                                writer={val2.subWriter}
                                                date={val2.subDate}
                                                content={val2.subContent}
                                                report={val2.subReport} />
                                        );
                                    })}
                                    <WriteSubComment
                                        targetMainId={val.mainIdx}
                                        isHide={""}
                                        OnCommentSubmit={OnCommentSubmit}
                                    />
                                </div>
                            </div>
                        );
                    }
                    // 답글 없는 댓글
                    else if (!val.subContent)
                        return (
                            <div className={styles.MainSubCommentContainer} key={val.mainIdx}>
                                <MainComment
                                    hasSubComment={false}
                                    parentClass={styles.MainSubCommentContainer}
                                    key={val.mainIdx}
                                    commentId={val.mainIdx}
                                    writer={val.mainWriter === '-1' ? '익명' : val.mainWriter}
                                    date={val.mainDate}
                                    content={val.mainContent}
                                    report={val.mainReport} />
                                <div className={styles.SubCommentWrapper + " hide"}>
                                    <WriteSubComment
                                        targetMainId={val.mainIdx}
                                        isHide={""}
                                        OnCommentSubmit={OnCommentSubmit}
                                    />
                                </div>
                            </div>
                        );
                    // idx == 0은 아닌 답글 있는 댓글
                    else if (val.commentId !== elem[idx - 1].commentId) {
                        return (
                            <div className={styles.MainSubCommentContainer} key={val.mainIdx}>
                                <MainComment
                                    hasSubComment={true}
                                    parentClass={styles.MainSubCommentContainer}
                                    key={val.mainIdx}
                                    commentId={val.mainIdx}
                                    writer={val.mainWriter === '-1' ? '익명' : val.mainWriter}
                                    date={val.mainDate}
                                    content={val.mainContent}
                                    report={val.mainReport} />
                                <div className={styles.SubCommentWrapper}>
                                    {elem.filter(val1 => val.commentId === val1.commentId).map((val2, idx2) => {
                                        return (
                                            <SubComment
                                                key={val.mainIdx + "_" + val2.subIdx}
                                                commentId={val.mainIdx + "_" + val2.subIdx}
                                                writer={val2.subWriter}
                                                date={val2.subDate}
                                                content={val2.subContent}
                                                report={val2.subReport} />
                                        );
                                    })}
                                    <WriteSubComment
                                        targetMainId={val.mainIdx}
                                        isHide={""}
                                        OnCommentSubmit={OnCommentSubmit}
                                    />
                                </div>
                            </div>
                        );
                    }
                    else return (<></>);
                })}
            </div>
            <WriteAnonyComment
                OnCommentSubmit={OnCommentSubmit}
            />
        </div>
    )
}
export default Comment;
