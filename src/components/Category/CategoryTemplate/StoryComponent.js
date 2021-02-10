import React from 'react';
import styles from './StoryComponent.module.scss';

function StoryComponent(props) {
    return (
        <div className={styles.container}>
            {props.imgUrl ?
                <>
                    <div className={styles.img}><img src={props.imgUrl} alt={""} /></div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.title}>{props.title}</div>
                        <div className={styles.date}>{props.date}</div>
                        <div className={styles.content}>{props.content.length >= 100 ? props.content.substr(0, 100) + "..." : props.content}</div>
                    </div>
                </>
                :
                <>
                    <div className={styles.title}>{props.title}</div>
                    <div className={styles.date}>{props.date}</div>
                    <div className={styles.content}>{props.content.length >= 180 ? props.content.substr(0, 180) + "..." : props.content}</div>
                </>}


        </div>
    )
}
export default StoryComponent;
