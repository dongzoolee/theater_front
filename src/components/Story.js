import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Story.module.css';
import storyLocationIcon from '../static/location-1.png';

class Story extends Component {
    render() {
        return (
            <div className={styles.storyContainer}>
                <div className={styles.storyWrapper}>
                    <div className={styles.storyCategory}>
                        <span className={styles.mainCategory}>일기&nbsp;/&nbsp;</span>
                    <span className={styles.subCategory}>개발일기</span>
                    </div>
                    <div className={styles.storyTitle}>쉬다가세요</div>
                    <div className={styles.storyDate}>2021년 1월 4일 오후 9시</div>
                    <div className={styles.storyDateIcon}><img src={storyLocationIcon} /></div>
                    <div className={styles.storyLocation}>서울시 마포구</div>
                    <div className={styles.storyContent}>어서오세요
모두가 쉬어갈 수 있는 블로그를 만들었습니다.<br />
                        <br />
기본적으로 익명댓글 작성이 가능합니다.<br />
로그인 하시면 본인의 댓글에 대한 답글 알림을 받아보실 수 있으며,<br />
본인이 작성한 댓글을 한 곳에서 모아보실 수 있습니다.<br />
                        <br />
다시 한 번 반갑습니다.
</div>
                </div>
            </div>
        )
    }
}
export default Story;
