import React, { useState } from 'react';
import styles from './MainComment.module.scss';
import '../Comment.scss';
import SirenWriteSubWrapper from '../SirenWriteSubWrapper/SirenWriteSubWrapper';

function MainComment(props) {
    const [userIcon] = useState(Math.floor(Math.random() * 4) + 1)
    return (
        <>
            <div className={styles.commentContainer} id={props.commentId}>
                <div className="profileImgWrapper"><img alt="user profile" style={{ width: '100%', height: '100%' }} src={'/icons/userIcon-' + userIcon + '.jpg'} draggable="false" /></div>
                <div className={styles.commentContentWrapper}>
                    <div className="WriterDateWrapper">
                        <div className="commentWriter"><span>{props.writer.length >= 18 ? props.writer.substring(0, 10) + "..." : props.writer}</span>{props.report !== 0 ? <span className="reportedComment">&lt;신고된 댓글&gt;&nbsp;+{props.report}</span> : ""}</div>
                        <div className={styles.SirenWriteSubWrapper}>
                            <SirenWriteSubWrapper
                                isMainComment={true}
                                hasSubComment={props.hasSubComment}
                                parentClass={styles.commentContainer}
                                key={props.commentId}
                                commentId={props.commentId}
                                date={props.date}
                            />
                        </div>
                    </div>
                    <div className="commentContent">{props.content}</div>
                </div>
                <div className={styles.SirenWriteSubWrapperForMobile}>
                    <div><div>
                        <SirenWriteSubWrapper
                            isMainComment={true}
                            hasSubComment={props.hasSubComment}
                            parentClass={styles.commentContainer}
                            key={props.commentId}
                            commentId={props.commentId}
                            date={props.date}
                        />
                    </div></div>
                </div>
            </div>
        </>
    )
}
export default MainComment;
