import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import styles from './StoryLine.module.scss';
import axios from 'axios';
import AdfitWebComponent from 'react-adfit-web-component'
import MobileContentWrapper from './MobileContentWrapper/MobileContentWrapper';

class StoryLine extends Component {
    state = {
        content: [],
    }
    getTextElement = (s) => {
        let span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    }
    getImgSrc = (s) => {
        let regex = /<img.*?src="([^">]*\/([^">]*?))".*?>/g, ret;
        ret = regex.exec(s);
        if (ret)
            return ret[1];
        else
            return null;
    }
    componentDidMount() {
        axios
            .get('/api/read/storylinecontents')
            .then(res => {
                this.setState({
                    content: res.data
                })
            })
            .catch(err => console.log(err))
        document.querySelector('.header').style.width = "89%";
        document.querySelector('.header').style.maxWidth = "2300px";
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <>
                <Header
                    isStoryLine={true}
                />
                <div className={"storyContainer " + styles.MainCategoryWrapper}>
                    <div className={styles.Header + " non--draggable"}>스토리 라인</div>
                    <div className={styles.MobileContentWrapper}>
                        <MobileContentWrapper />
                    </div>
                    <div className={styles.ContentWrapper}>
                        <table>
                            <tbody>
                                <tr>
                                    <th className={styles.StoryLineTh} style={{ width: '39.1%', padding: '0 0 0.8rem 0.6rem' }}>
                                        <div className={styles.StoryLineContentWrapper + " non--draggable"}>
                                            <Link to="/보물창고">
                                                <div className={styles.StoryLineTitle}>보물창고</div>

                                                <div className={styles.StoryLineContent}>{Math.ceil((new Date().getTime() - new Date('2020-08-27').getTime()) / 1000 / 60 / 60 / 24)}일차 개발자의 보물창고. 기억 속에서 사라지기 전에 소중한 기억들을 기록한다.</div>
                                            </Link>
                                        </div>
                                    </th>
                                    <th className={styles.StoryLineTh} style={{ width: '18.5%' }}>
                                        <div className={styles.StoryLineContentWrapper + " non--draggable"}>
                                            <Link to="/낙서">
                                                <div className={styles.StoryLineTitle}>낙서</div>
                                                <div className={styles.StoryLineContent}>언젠가는 도움될 쓸모있는 낙서들</div>
                                            </Link>
                                        </div>
                                    </th>
                                    <th className={styles.StoryLineTh} style={{ width: '25.7%' }}>
                                        <div className={styles.StoryLineContentWrapper + " non--draggable"}>
                                            <Link to="/일기">
                                                <div className={styles.StoryLineTitle}>일기</div>
                                                <div className={styles.StoryLineContent}>정돈되지 못한 일상에 질서를 지우기 위한 최소한의 노력</div>
                                            </Link>
                                        </div>
                                    </th>
                                    <th className={styles.StoryLineTh}>
                                        <div className={styles.StoryLineContentWrapper + " non--draggable"}>
                                            <Link to="/배움">
                                                <div className={styles.StoryLineTitle}>배움</div>
                                                <div className={styles.StoryLineContent}>소중한 시간을 갈아넣어 얻은 배움</div>
                                            </Link>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    {this.state.content.map((val, idx) => {
                                        if (idx === 0)
                                            return (

                                                <th className={styles.StoryLineStoryTh} key={idx}>
                                                    <Link to={"/story/" + val.idx}>
                                                        <div className={styles.BigContainer}>
                                                            {this.getImgSrc(val.content) ?
                                                                <>
                                                                    <div className={styles.BigImg}><img src={this.getImgSrc(val.content)} alt={""} /></div>
                                                                    <div className={styles.BigTitle}>{val.title}</div>
                                                                    <div className={styles.BigDate}>{val.date}</div>
                                                                    <div className={styles.BigContent}>{this.getTextElement(val.content).length >= 60 ? this.getTextElement(val.content).substring(0, 60) : this.getTextElement(val.content)}</div>
                                                                </> :
                                                                <>
                                                                    <div className={styles.BigTitle}>{val.title}</div>
                                                                    <div className={styles.BigDate}>{val.date}</div>
                                                                    <div className={styles.BigContent}>{this.getTextElement(val.content).length >= 60 ? this.getTextElement(val.content).substring(0, 120) : this.getTextElement(val.content)}</div>
                                                                </>
                                                            }
                                                        </div>
                                                    </Link>
                                                </th>
                                            )
                                        else if (idx === 1)
                                            return (
                                                <th className={styles.StoryLineStoryTh} key={idx}>
                                                    <Link to={"/story/" + val.idx}>
                                                        <div className={styles.MidContainer}>
                                                            <div className={styles.MidImg}><img src={this.getImgSrc(val.content)} alt={""} /></div>
                                                            <div className={styles.MidTitle}>{val.title}</div>
                                                            <div className={styles.MidDate}>{val.date}</div>
                                                        </div>
                                                    </Link>
                                                </th>
                                            )
                                        else if (idx === 2)
                                            return (
                                                <th className={styles.StoryLineStoryTh} key={idx}>
                                                    <Link to={"/story/" + val.idx}>
                                                        <div className={styles.ContentOnly}>{this.getTextElement(val.content).length >= 100 ? this.getTextElement(val.content).substring(0, 100) : this.getTextElement(val.content)}</div>
                                                    </Link>
                                                </th>
                                            )
                                        else if (idx === 3)
                                            return (
                                                <th className={styles.StoryLineStoryTh} key={idx}>
                                                    <Link to={"/story/" + val.idx}>
                                                        <div className={styles.SmallContainer}>
                                                            <div className={styles.SmallTitle}>{val.title}</div>
                                                            <div className={styles.SmallDate}>{val.date}</div>
                                                        </div>
                                                    </Link>
                                                </th>
                                            )
                                        else return (<></>);
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <AdfitWebComponent
                        adUnit="DAN-zrThBYMLPyPfF7zx"
                    /> */}
                </div>
            </>
        )
    }
}
export default withRouter(StoryLine);
