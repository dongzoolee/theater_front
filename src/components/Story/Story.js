import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Story.module.scss';
import '../Story.css';
import storyLocationIcon from '../../static/icons/location-1.png';

function Story(props) {
  const storyContent = useRef();
  useEffect(() => {
    storyContent.current.querySelectorAll('a').forEach(ele => {
      ele.style.textDecoration = 'underline';
      ele.style.color = '#5656D8';
      ele.style.fontFamily = 'kopub-dotum-bold';
    })
  })
  return (
    <div className={styles.storyWrapper}>
      <div className={styles.storyInfoWrapper}>
        <div className={styles.storyCategory}>
          <Link to={'/' + props.mainCategory}><span className={styles.mainCategory}>{props.mainCategory}&nbsp;/&nbsp;</span></Link>
          <Link to={'/' + props.mainCategory + '/' + props.subCategory}><span className={styles.subCategory}>{props.subCategory}</span></Link>
        </div>
        <div className={styles.storyTitle}>{props.storyTitle}</div>
        <div className={styles.storyDate}>{props.storyDate}</div>
        <div className={styles.storyLocationIcon}><img alt="story location" src={storyLocationIcon} /></div>
        <Link to={'/장소/' + props.storyLocation}><div className={styles.storyLocation}>{props.storyLocation}</div></Link>
      </div>
      <div ref={storyContent} className={styles.storyContent}><span dangerouslySetInnerHTML={{ __html: props.storyContent }} /></div>
    </div>
  )
}
export default Story;
