import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './MainComment.module.scss';
import profileImg from '../../../static/userImg-2.jpg';

class MainComment extends Component {
    render() {
        return (
            <div className={styles.commentContainer}>
                <div className={styles.profileImgWrapper}><img style={{ width: '100%', height: '100%' }} src={profileImg} draggable="false" /></div>
                <div className={styles.commentContentWrapper}>
                    <div className={styles.commentName}>{this.props.writer}</div>
                    <div className={styles.commentDate}>{this.props.date}</div>
                    <div className={styles.commentContent}>{this.props.content}</div>
                </div>
            </div>
        )
    }
}
export default MainComment;
