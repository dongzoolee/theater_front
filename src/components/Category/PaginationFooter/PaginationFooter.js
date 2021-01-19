import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './PaginationFooter.module.scss';

class PaginationFooter extends Component {
    render() {
        return (
            <div className={styles.Footer}>
                <div className={styles.PageNumberWrapper}>
                    <a href="?page=1"><div className={styles.PageNumber + " non--draggable"}>1</div></a>
                    <a href="?page=2"><div className={styles.PageNumber + " non--draggable"}>2</div></a>
                    <a href="?page=3"><div className={styles.PageNumber + " non--draggable"}>3</div></a>
                    <a href="?page=4"><div className={styles.PageNumber + " non--draggable"}>4</div></a>
                    <a href="?page=5"><div className={styles.PageNumber + " non--draggable"}>5</div></a>
                </div>
                <div className={styles.SearchBoxWrapper}>
                    <input className={styles.SearchBox} />
                    <div className={styles.SearchIcon}>
                        <img src="/icons/search-1.png" />
                    </div>
                </div>
            </div>
        )
    }
}
export default PaginationFooter;
