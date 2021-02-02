import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import styles from './StoryLine.module.scss';
import axios from 'axios';
import AdfitWebComponent from 'react-adfit-web-component'
import MobileContentWrapper from './MobileContentWrapper/MobileContentWrapper';
import StoryPreview from '../StoryPreview/StoryPreview';

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
        let ins = document.createElement('ins');
        let scr = document.createElement('script');
        ins.className = 'kakao_ad_area';
        ins.style = "display:none; width:100%;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        if (window.matchMedia('(min-width: 875px)').matches) {
            ins.setAttribute('data-ad-width', '728');
            ins.setAttribute('data-ad-height', '90');
            ins.setAttribute('data-ad-unit', 'DAN-zrThBYMLPyPfF7zx');
        } else {
            ins.setAttribute('data-ad-width', '320');
            ins.setAttribute('data-ad-height', '50');
            ins.setAttribute('data-ad-unit', 'DAN-CyjKlg2fzvV9gtXU');
        }
        document.querySelector('.' + styles.adfit).appendChild(ins);
        document.querySelector('.' + styles.adfit).appendChild(scr);
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <>
                <Header
                    isStoryLine={true}
                />
                <div className={styles.MobileContentWrapper}>
                    <MobileContentWrapper
                        content={this.state.content}
                    />
                </div>
                <div className={"storyContainer " + styles.MainCategoryWrapper}>
                    <div className={styles.Header + " non--draggable"}>스토리 라인</div>
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
                                                <div className={styles.StoryLineContent}>소중한 추억들을 되돌아 보는 시간</div>
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
                                        return (
                                            <th className={styles.StoryLineStoryTh} key={idx}>
                                                <StoryPreview
                                                    idx={idx}
                                                    storyId={val.idx}
                                                    title={val.title}
                                                    date={val.date}
                                                    content={val.content}
                                                />
                                            </th>
                                        )
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.adfit} />
            </>
        )
    }
}
export default withRouter(StoryLine);
