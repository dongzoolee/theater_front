import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileContentWrapper.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StoryPreview from '../../StoryPreview/StoryPreview';

function MobileContentWrapper(props) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1300, // animation speed
        // autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            <div className={styles.Header}>
                <div>스토리라인</div>
            </div>
            <div className={styles.StorySlideWrapper}>
                <div className={styles.StorySlide}>
                    <>
                        {props.content.map((val, idx) => {
                            {
                                if (idx == 2) {
                                    return (
                                        <>
                                            <div className={styles.StorySlideHeader} key={"slider_" + idx}><Link to={'/' + val.mainCategory}>{val.mainCategory}</Link></div>
                                            <StoryPreview
                                                key={"preview_" + idx}
                                                idx={0}
                                                storyId={val.idx}
                                                title={val.title}
                                                date={val.date}
                                                content={val.content}
                                            />
                                        </>
                                    )
                                }
                            }
                        })}
                    </>
                    {/* <Slider {...settings}>
                        {props.content.map((val, idx) => {
                            return (
                                <>
                                    <div className={styles.StorySlideHeader} key={"slider_" + idx}><Link to={'/' + val.mainCategory}>{val.mainCategory}</Link></div>
                                    <StoryPreview
                                        key={"preview_" + idx}
                                        idx={0}
                                        storyId={val.idx}
                                        title={val.title}
                                        date={val.date}
                                        content={val.content}
                                    />
                                </>
                            )
                        })}
                    </Slider> */}
                </div>
            </div>
            <div className={styles.StoryLineWrapper}>
                <div className={styles.StoryLineContentWrapper + " non--draggable"}>
                    <Link to="/보물창고">
                        <div className={styles.BigStoryLine}>
                            <div className={styles.StoryLineTitle}>보물창고</div>
                            <div className={styles.StoryLineContent}>{Math.ceil((new Date().getTime() - new Date('2020-08-27').getTime()) / 1000 / 60 / 60 / 24)}일차 개발자의 보물창고.<br />기억 속에서 사라지기 전에<br />소중한 기억들을 기록한다.</div>
                        </div>
                    </Link>
                    <hr className={styles.StoryLineHr1} />
                    <div className={styles.SmallStoryLineWrapper}>
                        <Link to="/낙서">
                            <div className={styles.SmallStoryLine}>
                                <div className={styles.StoryLineTitle}>낙서</div>
                                <div className={styles.SmallStoryLineContent}>언젠간 쓸일이 있을<br />쓸모있는 낙서들</div>
                            </div>
                        </Link>
                        <hr className={styles.StoryLineHr2} />
                        <Link to="/일기">
                            <div className={styles.SmallStoryLine}>
                                <div className={styles.StoryLineTitle}>일기</div>
                                <div className={styles.SmallStoryLineContent}>소중한 추억들을<br />되돌아 보는 시간</div>
                            </div>
                        </Link>
                        <hr className={styles.StoryLineHr2} />
                        <Link to="/배움">
                            <div className={styles.SmallStoryLine}>
                                <div className={styles.StoryLineTitle}>배움</div>
                                <div className={styles.SmallStoryLineContent}>소중한 시간을<br />갈아넣어 얻은 배움</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MobileContentWrapper;
