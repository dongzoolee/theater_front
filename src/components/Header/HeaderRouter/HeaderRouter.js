import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderRouter.module.scss';

class HeaderRouter extends Component {
    render() {
        return (
            <>
                <span className={styles.loginIcon + " non--draggable"}><Link to="/storyline">스토리 라인</Link></span>
                <span className={styles.headerIcon + " non--draggable"}><Link to="/hot">인기글</Link></span>
                <span className={styles.headerIcon + " non--draggable"}>내가 작성한 댓글</span >
                <span className={styles.headerIcon + " non--draggable"}>알림</span>
            </>
        )
    }
}
export default HeaderRouter;
