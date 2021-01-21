import React, { Component } from 'react';
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import styles from './StoryLine.module.scss';
import axios from 'axios';

class StoryLine extends Component {
    state = {
        content: [],
    }
    componentDidMount() {
        axios
            .post('/api/read/',)
            .then(res =>
                this.setState({
                    content: res.data
                }))
    }
    render() {
        return (
            <>
                <Header />
                <div className={"storyContainer " + styles.MainCategoryWrapper}>
                    <div className={styles.Header + " non--draggable"}>스토리 라인</div>
                    <div className={styles.ContentWrapper}>
                        <table>
                            <tr>
                                <th className={styles.StoryLineTh} style={{ width: '39.1%', padding: '0 0 0.8rem 0.6rem' }}>
                                    <div className={styles.StoryLineContentWrapper}>
                                        <Link to="/보물창고">
                                            <div className={styles.StoryLineTitle}>보물창고</div>
                                            <div className={styles.StoryLineContent}>200일차 개발자의 보물창고. 기억 속에서 사라지기 전에 소중한 기억들을 기록한다.</div>
                                        </Link>
                                    </div>
                                </th>
                                <th className={styles.StoryLineTh} style={{ width: '18.5%' }}>
                                    <div className={styles.StoryLineContentWrapper}>
                                        <Link to="/낙서">
                                            <div className={styles.StoryLineTitle}>낙서</div>
                                            <div className={styles.StoryLineContent}>언젠가는 도움될 쓸모있는 낙서들</div>
                                        </Link>
                                    </div>
                                </th>
                                <th className={styles.StoryLineTh} style={{ width: '25.7%' }}>
                                    <div className={styles.StoryLineContentWrapper}>
                                        <Link to="/일기">
                                            <div className={styles.StoryLineTitle}>일기</div>
                                            <div className={styles.StoryLineContent}>정돈되지 못한 일상에 질서를 지우기 위한 최소한의 노력</div>
                                        </Link>
                                    </div>
                                </th>
                                <th className={styles.StoryLineTh}>
                                    <div className={styles.StoryLineContentWrapper}>
                                        <Link to="/배움">
                                            <div className={styles.StoryLineTitle}>배움</div>
                                            <div className={styles.StoryLineContent}>소중한 시간을 갈아넣어 얻은 배움</div>
                                        </Link>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th className={styles.StoryLineStoryTh}>
                                    <div className={styles.BigContainer}>
                                        <div className={styles.BigImg}><img src={this.props.imgUrl} alt={""} /></div>
                                        <div className={styles.BigTitle}>호박고구마 잘 굽는 법</div>
                                        <div className={styles.BigDate}>2021년 10월 12일 오후 9시</div>
                                        <div className={styles.BigContent}>하염하염</div>
                                    </div>
                                </th>
                                <th className={styles.StoryLineStoryTh}>
                                    <div className={styles.MidContainer}>
                                        <div className={styles.MidImg}><img src={this.props.imgUrl} alt={""} /></div>
                                        <div className={styles.MidTitle}>호박고구마 잘 굽는 법</div>
                                        <div className={styles.MidDate}>2021년 10월 12일 오후 9시</div>
                                    </div>
                                </th>
                                <th className={styles.StoryLineStoryTh}>
                                    <div className={styles.ContentOnly}>카카오에서 인턴을 시작했다. 이번주부터 근무를 시작해서 모르는 사람들과 사회 생활을 시작했다. 별로지만 일단 하라는 대로 하고 있다.</div>
                                </th>
                                <th className={styles.StoryLineStoryTh}>
                                    <div className={styles.SmallContainer}>
                                        <div className={styles.SmallTitle}>호박고구마 잘 굽는 법</div>
                                        <div className={styles.SmallDate}>2021년 10월 12일 오후 9시</div>
                                    </div>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
export default StoryLine;
