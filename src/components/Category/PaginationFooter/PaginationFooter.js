import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './PaginationFooter.module.scss';

class PaginationFooter extends Component {
    state = {
        content: []
    }
    searchContent = (e) => {
        console.log(e)
        if (e.keyCode === 13) {
            window.location.href = "?search=" + e.target.value;
        }
    }
    URLParams = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?')));
    render() {
        return (
            <div className={styles.Footer}>
                <div className={styles.PageNumberWrapper}>
                    <a href={this.URLParams.get('search') ? "?search=" + this.URLParams.get('search') + "&page=1" : "?page=1"}><div className={styles.PageNumber + " non--draggable"}>1</div></a>
                    <a href={this.URLParams.get('search') ? "?search=" + this.URLParams.get('search') + "&page=2" : "?page=2"}><div className={styles.PageNumber + " non--draggable"}>2</div></a>
                    <a href={this.URLParams.get('search') ? "?search=" + this.URLParams.get('search') + "&page=3" : "?page=3"}><div className={styles.PageNumber + " non--draggable"}>3</div></a>
                    <a href={this.URLParams.get('search') ? "?search=" + this.URLParams.get('search') + "&page=4" : "?page=4"}><div className={styles.PageNumber + " non--draggable"}>4</div></a>
                    <a href={this.URLParams.get('search') ? "?search=" + this.URLParams.get('search') + "&page=5" : "?page=5"}><div className={styles.PageNumber + " non--draggable"}>5</div></a>
                </div>
                <div className={styles.SearchBoxWrapper}>
                    <input className={styles.SearchBox} onKeyUp={e => this.searchContent(e)} />
                    <div className={styles.SearchIcon} onClick={this.searchContent}>
                        <img src="/icons/search-1.png" />
                    </div>
                </div>
            </div>
        )
    }
}
export default PaginationFooter;
