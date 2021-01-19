import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Story.module.css';
import '../Story.css';
import storyLocationIcon from '../../static/icons/location-1.png';
import Comment from '../Comment/Comment';

class Story extends Component {
    render() {
        return (
            <div className={styles.storyWrapper}>
                <div className={styles.storyCategory}>
                    <Link to={'/' + this.props.mainCategory}><span className={styles.mainCategory}>{this.props.mainCategory}&nbsp;/&nbsp;</span></Link>
                    <Link to={'/' + this.props.mainCategory + '/' + this.props.subCategory}><span className={styles.subCategory}>{this.props.subCategory}</span></Link>
                </div>
                <div className={styles.storyTitle}>{this.props.storyTitle}</div>
                <div className={styles.storyDate}>{this.props.storyDate}</div>
                <div className={styles.storyLocationIcon}><img src={storyLocationIcon} /></div>
                <Link to={'/장소/' + this.props.storyLocation}><div className={styles.storyLocation}>{this.props.storyLocation}</div></Link>
                <div className={styles.storyContent}><span dangerouslySetInnerHTML={{ __html: this.props.storyContent }} /></div>
            </div>
        )
    }
}
export default Story;
