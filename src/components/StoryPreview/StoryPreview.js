import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import styles from './StoryPreview.module.scss';

class StoryPreview extends Component {
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
    render() {
        return (
            <>
                {this.props.idx === 0 ?
                    <Link to={"/story/" + this.props.storyId}>
                        <div className={styles.BigContainer}>
                            {this.getImgSrc(this.props.content) ?
                                <>
                                    <div className={styles.BigImg}><img src={this.getImgSrc(this.props.content)} alt={""} /></div>
                                    <div className={styles.BigTitle}>{this.props.title}</div>
                                    <div className={styles.BigDate}>{this.props.date}</div>
                                    <div className={styles.BigContent}>{this.getTextElement(this.props.content).length >= 60 ? this.getTextElement(this.props.content).substring(0, 60) : this.getTextElement(this.props.content)}</div>
                                </> :
                                <>
                                    <div className={styles.BigTitle}>{this.props.title}</div>
                                    <div className={styles.BigDate}>{this.props.date}</div>
                                    <div className={styles.BigContent}>{this.getTextElement(this.props.content).length >= 60 ? this.getTextElement(this.props.content).substring(0, 120) : this.getTextElement(this.props.content)}</div>
                                </>
                            }
                        </div>
                    </Link>
                    :
                    this.props.idx === 1 ?
                        <Link to={"/story/" + this.props.storyId}>
                            <div className={styles.MidContainer}>
                                <div className={styles.MidImg}><img src={this.getImgSrc(this.props.content)} alt={""} /></div>
                                <div className={styles.MidTitle}>{this.props.title}</div>
                                <div className={styles.MidDate}>{this.props.date}</div>
                            </div>
                        </Link>
                        :
                        this.props.idx === 2 ?
                            <Link to={"/story/" + this.props.storyId}>
                                <div className={styles.ContentOnly}>{this.getTextElement(this.props.content).length >= 100 ? this.getTextElement(this.props.content).substring(0, 100) : this.getTextElement(this.props.content)}</div>
                            </Link>
                            :
                            this.props.idx === 3 ?
                                <Link to={"/story/" + this.props.storyId}>
                                    <div className={styles.SmallContainer}>
                                        <div className={styles.SmallTitle}>{this.props.title}</div>
                                        <div className={styles.SmallDate}>{this.props.date}</div>
                                    </div>
                                </Link>
                                : <></>
                }
            </>
        )
    }
}
export default StoryPreview;
