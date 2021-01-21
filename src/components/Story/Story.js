import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Story.module.scss';
import '../Story.css';
import storyLocationIcon from '../../static/icons/location-1.png';

class Story extends Component {
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
      <div className={styles.storyWrapper}>
        <div className={styles.storyCategory}>
          <Link to={'/' + this.props.mainCategory}><span className={styles.mainCategory}>{this.props.mainCategory}&nbsp;/&nbsp;</span></Link>
          <Link to={'/' + this.props.mainCategory + '/' + this.props.subCategory}><span className={styles.subCategory}>{this.props.subCategory}</span></Link>
        </div>
        <div className={styles.storyTitle}>{this.props.storyTitle}</div>
        <div className={styles.storyDate}>{this.props.storyDate}</div>
        <div className={styles.storyLocationIcon}><img alt="story location" src={storyLocationIcon} /></div>
        <Link to={'/장소/' + this.props.storyLocation}><div className={styles.storyLocation}>{this.props.storyLocation}</div></Link>
        <div className={styles.storyContent}><span dangerouslySetInnerHTML={{ __html: this.props.storyContent }} /></div>
      </div>
    )
  }
}
export default Story;
