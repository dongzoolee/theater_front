import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Story.module.css';
import '../Story.css';
import storyLocationIcon from '../../static/location-1.png';

class Story extends Component {
    componentDidMount() {
        document.getElementById('root').style = "background-color: " + this.props.outerColor + ";";
        document.getElementsByClassName('storyContainer')[0].style="background-color: " + this.props.innerColor + ";";
    }
    render() {
        return (
            <div className="storyContainer">
                <div className={styles.storyWrapper}>
                    <div className={styles.storyCategory}>
                        <span className={styles.mainCategory}>{this.props.mainCategory}&nbsp;/&nbsp;</span>
                        <span className={styles.subCategory}>{this.props.subCategory}</span>
                    </div>
                    <div className={styles.storyTitle}>{this.props.storyTitle}</div>
                    <div className={styles.storyDate}>{this.props.storyDate}</div>
                    <div className={styles.storyLocationIcon}><img src={storyLocationIcon} /></div>
                    <div className={styles.storyLocation}>{this.props.storyLocation}</div>
                    <div className={styles.storyContent}><span dangerouslySetInnerHTML={ {__html: this.props.storyContent} } /></div>
                </div>
            </div>
        )
    }
}
export default Story;
