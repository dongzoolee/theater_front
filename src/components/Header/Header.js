import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <span className={styles.loginIcon}>로그인</span>
                <span className={styles.headerIcon}>인기글</span>
                <span className={styles.headerIcon}> 내가 작성한 댓글</span >
                <span className={styles.headerIcon}>알림</span>
                <span className={styles.thsixIcon}><Link to="/">36부작</Link></span>
            </div >
        )
    }
}
export default Header;
