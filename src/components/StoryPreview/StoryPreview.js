import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StoryPreview.module.scss';

function StoryPreview(props) {
    const getTextElement = (s) => {
        let span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    }
    const getImgSrc = (s) => {
        let regex = /<img.*?src="([^">]*\/([^">]*?))".*?>/g, ret;
        ret = regex.exec(s);
        if (ret)
            return ret[1];
        else
            return null;
    }
    return (
        <>
            {props.idx === 0 ?
                <Link to={"/story/" + props.storyId}>
                    <div className={styles.BigContainer}>
                        {getImgSrc(props.content) ?
                            <>
                                <div className={styles.BigImg}><img src={getImgSrc(props.content)} alt={""} /></div>
                                <div className={styles.BigTitle}>{props.title}</div>
                                <div className={styles.BigDate}>{props.date}</div>
                                <div className={styles.BigContent}>{getTextElement(props.content).length >= 60 ? getTextElement(props.content).substring(0, 60) : getTextElement(props.content)}</div>
                            </> :
                            <>
                                <div className={styles.BigTitle}>{props.title}</div>
                                <div className={styles.BigDate}>{props.date}</div>
                                <div className={styles.BigContent}>{getTextElement(props.content).length >= 60 ? getTextElement(props.content).substring(0, 120) : getTextElement(props.content)}</div>
                            </>
                        }
                    </div>
                </Link>
                :
                props.idx === 1 ?
                    <Link to={"/story/" + props.storyId}>
                        <div className={styles.MidContainer}>
                            <div className={styles.MidImg}><img src={getImgSrc(props.content)} alt={""} /></div>
                            <div className={styles.MidTitle}>{props.title}</div>
                            <div className={styles.MidDate}>{props.date}</div>
                        </div>
                    </Link>
                    :
                    props.idx === 2 ?
                        <Link to={"/story/" + props.storyId}>
                            <div className={styles.ContentOnly}>{getTextElement(props.content).length >= 100 ? getTextElement(props.content).substring(0, 100) : getTextElement(props.content)}</div>
                        </Link>
                        :
                        props.idx === 3 ?
                            <Link to={"/story/" + props.storyId}>
                                <div className={styles.SmallContainer}>
                                    <div className={styles.SmallTitle}>{props.title}</div>
                                    <div className={styles.SmallDate}>{props.date}</div>
                                </div>
                            </Link>
                            : <></>
            }
        </>
    )
}
export default StoryPreview;
