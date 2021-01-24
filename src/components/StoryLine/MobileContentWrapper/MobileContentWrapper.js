import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileContentWrapper.module.scss';

class MobileContentWrapper extends Component {
    render() {
        return (
            <div className={styles.ContentWrapper}>
                <div className={styles.StoryLineContentWrapper + " non--draggable"}>
                    <Link to="/보물창고">
                        <div className={styles.StoryLineTitle}>보물창고</div>
                        <div className={styles.StoryLineContent}>{Math.ceil((new Date().getTime() - new Date('2020-08-27').getTime()) / 1000 / 60 / 60 / 24)}일차 개발자의 보물창고. 기억 속에서 사라지기 전에 소중한 기억들을 기록한다.</div>
                    </Link>
                </div>
                <div className={styles.StoryLineContentWrapper + " non--draggable"}>
                    <Link to="/낙서">
                        <div className={styles.StoryLineTitle}>낙서</div>
                        <div className={styles.StoryLineContent}>언젠가는 도움될 쓸모있는 낙서들</div>
                    </Link>
                </div>
                <div className={styles.StoryLineContentWrapper + " non--draggable"}>
                    <Link to="/일기">
                        <div className={styles.StoryLineTitle}>일기</div>
                        <div className={styles.StoryLineContent}>정돈되지 못한 일상에 질서를 지우기 위한 최소한의 노력</div>
                    </Link>
                </div>
                <div className={styles.StoryLineContentWrapper + " non--draggable"}>
                    <Link to="/배움">
                        <div className={styles.StoryLineTitle}>배움</div>
                        <div className={styles.StoryLineContent}>소중한 시간을 갈아넣어 얻은 배움</div>
                    </Link>
                </div>
            </div>
        )
    }
}
export default MobileContentWrapper;
