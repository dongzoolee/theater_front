import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Comment.module.scss';
import WriteComment from './WriteComment/WriteComment';
import SubComment from './SubComment/SubComment';
import MainComment from './MainComment/MainComment';

class Comment extends Component {
    render() {
        return (
            <div className={styles.commentContainer}>
                <div className={styles.commentCount}>댓글 13개</div>
                <MainComment />
                <div className={styles.SubCommentWrapper}>
                    <SubComment />
                </div>
                <WriteComment />
            </div>
        )
    }
}
export default Comment;
