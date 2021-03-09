import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './StoryPreview.module.scss';

function StoryPreview(props) {
    const [imgSrc, setImgSrc] = useState("")
    const [textElement, setTextElement] = useState("")

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
    useEffect(() => {
        setImgSrc(getImgSrc(props.content))
        setTextElement(getTextElement(props.content))
        // eslint-disable-next-line react-hooks/exhaustive-deps
        console.log('hiii')
    }, [])
    return (
        <>
            {props.idx === 0 ?
                <Link to={"/story/" + props.storyId}>
                    <div className={styles.BigContainer}>
                        {imgSrc ?
                            <>
                                <div className={styles.BigImg}><img src={imgSrc} alt={""} /></div>
                                <div className={styles.BigTitle}>{props.title}</div>
                                <div className={styles.BigDate}>{props.date}</div>
                                <div className={styles.BigContent}>{textElement.length >= 60 ? textElement.substring(0, 60) : textElement}</div>
                            </> :
                            <>
                                <div className={styles.BigTitle}>{props.title}</div>
                                <div className={styles.BigDate}>{props.date}</div>
                                <div className={styles.BigContent}>{textElement.length >= 60 ? textElement.substring(0, 120) : textElement}</div>
                            </>
                        }
                    </div>
                </Link>
                :
                props.idx === 1 ?
                    <Link to={"/story/" + props.storyId}>
                        <div className={styles.MidContainer}>
                            <div className={styles.MidImg}><img src={imgSrc} alt={""} /></div>
                            <div className={styles.MidTitle}>{props.title}</div>
                            <div className={styles.MidDate}>{props.date}</div>
                        </div>
                    </Link>
                    :
                    props.idx === 2 ?
                        <Link to={"/story/" + props.storyId}>
                            <div className={styles.ContentOnly}>{textElement.length >= 100 ? textElement.substring(0, 100) : textElement}</div>
                        </Link>
                        :
                        props.idx === 3 ?
                            <Link to={"/story/" + props.storyId}>
                                <div className={styles.SmallContainer}>
                                    <div className={styles.SmallTitle}>{props.title}</div>
                                    <div className={styles.SmallDate}>{props.date}</div>
                                </div>
                            </Link>
                            : ""
            }
        </>
    )
}
export default StoryPreview;
