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
                        <span className={styles.mainCategory}>{this.props.mainCategory}&nbsp;/&nbsp;</span>
                    <span className={styles.subCategory}>{this.props.subCategory}</span>
                    </div>
                    <div className={styles.storyTitle}>{this.props.storyTitle}</div>
                    <div className={styles.storyDate}>{this.props.storyDate}</div>
                    <div className={styles.storyLocationIcon}><img src={storyLocationIcon} /></div>
                    <div className={styles.storyLocation}>{this.props.storyLocation}</div>
                    <div className={styles.storyContent}>{this.props.storyContent}</div>
                </div>
            </div>
        )
    }
}
export default Story;
