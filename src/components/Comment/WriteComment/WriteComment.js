import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './WriteComment.module.scss';

class WriteComment extends Component {
    render() {
        return (
            <div className={styles.colorContainer}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.writer}></div>
                        <div className={styles.date}></div>
                        <div className={styles.flexGrow}></div>
                        <div className={styles.emoji}></div>
                        <div className={styles.commitBtn}></div>
                    </div>
                    <div className={styles.content}>

                    </div>
                </div>
            </div>
        )
    }
}
export default WriteComment;
