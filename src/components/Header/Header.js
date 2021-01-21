import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <><div className="pace--loader"></div>
                <div className={styles.header}>
                    <span className={styles.loginIcon + " non--draggable"}><Link to="/storyline">스토리 라인</Link></span>
                    <span className={styles.headerIcon + " non--draggable"}>인기글</span>
                    <span className={styles.headerIcon + " non--draggable"}> 내가 작성한 댓글</span >
                    <span className={styles.headerIcon + " non--draggable"}>알림</span>
                    <span className={styles.thsixIcon + " non--draggable"}><a href="/">36부작</a></span>
                </div>
            </>
        )
    }
}
export default Header;
