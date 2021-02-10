import React, { useState, useEffect } from 'react';
import styles from './SubComment.module.scss';
import '../Comment.scss';
import WriteSubComment from '../WriteComment/WriteSubComment';
import axios from 'axios';
import SirenWriteSubWrapper from '../SirenWriteSubWrapper/SirenWriteSubWrapper';

function SubComment(props) {
    const [toggle, setToggle] = useState(false)
    const [userIcon, setUserIcon] = useState(Math.floor(Math.random() * 4) + 1)

    const openSubCommentWindow = (e) => {
        setToggle(prevToggle => {
            return !prevToggle
        })
    }
    const reportComment = (e) => {
        if (window.confirm('댓글을 신고하시겠습니까?'))
            axios
                .post('/api/report/comment', { key: props.commentId })
                .then(alert('신고가 정상적으로 처리되었습니다'))
                .catch(console.error)
    }
    useEffect(() => {
        document.querySelectorAll('.replyTo').forEach(ele => {
            ele.addEventListener('click', () => {

            })
        })
    }, [])
    return (
        <>
            <div className={styles.commentContainer} id={props.commentId}>
                <div className={"profileImgWrapper " + styles.profileImgWrapper}><img alt="user profile" style={{ width: '100%', height: '100%' }} src={process.env.PUBLIC_URL + '/icons/userIcon-' + userIcon + '.jpg'} /></div>
                <div className={styles.commentContentWrapper}>
                    <div className="WriterDateWrapper">
                        <div className="commentWriter"><span>{props.writer.length >= 18 ? props.writer.substring(0, 10) + "..." : props.writer}</span>{props.report !== 0 ? <span className="reportedComment">&lt;신고된 댓글&gt;&nbsp;+{props.report}</span> : ""}</div>
                        <div className={styles.SirenWriteSubWrapper}>
                            <SirenWriteSubWrapper
                                hasSubComment={props.hasSubComment}
                                parentClass={styles.commentContainer}
                                key={props.commentId}
                                commentId={props.commentId}
                                date={props.date}
                            />
                        </div>
                    </div>
                    <div className="commentContent"><span dangerouslySetInnerHTML={{ __html: props.content }} /></div>
                </div>
                <div className={styles.SirenWriteSubWrapperForMobile}>
                    <div><div>
                        <SirenWriteSubWrapper
                            hasSubComment={props.hasSubComment}
                            parentClass={styles.commentContainer}
                            key={props.commentId}
                            commentId={props.commentId}
                            date={props.date}
                        />
                    </div></div>
                </div>
            </div>
            {toggle && (
                <WriteSubComment
                    targetMainId={props.commentId.split('_')[0]}
                />
            )}
        </>
    )
}
export default SubComment;
