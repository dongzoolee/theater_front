import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './MainComment.module.scss';
import profileImg from '../../../static/userImg-2.jpg';

class MainComment extends Component {
    render() {
        return (
            <div className={styles.commentContainer}>
                <div className={styles.profileImgWrapper}><img style={{ width: '100%', height: '100%' }} src={profileImg} /></div>
                <div className={styles.commentContentWrapper}>
                    <div className={styles.commentName}>이동주</div>
                    <div className={styles.commentDate}>2021년 2월 29일</div>
                    <div className={styles.commentContent}>ㅋㅋㅋ 내용이 재밌네요 가끔 들를게요~</div>
                </div>
            </div>
        )
    }
}
export default MainComment;
