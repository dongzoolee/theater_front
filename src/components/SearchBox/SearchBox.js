import React, { Component } from 'react';
import styles from './SearchBox.module.scss';

class SearchBox extends Component {
    searchContent = (e) => {
        if (e.type === "click" || e.keyCode === 13)
            if (document.querySelector(".searchBoxInput").value.trim() !== "") {
                window.location.href = "?search=" + document.querySelector(".searchBoxInput").value.trim();
            } else
                alert('검색어를 입력해주세요')
    }
    URLParams = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?')));
    render() {
        return (
                <div className={styles.SearchBoxWrapper}>
                    <input className={styles.SearchBox + " searchBoxInput"} onKeyUp={e => this.searchContent(e)} />
                    <div className={styles.SearchIcon} onClick={this.searchContent}>
                        <img src="/icons/search-1.png" alt="searchIcon" />
                    </div>
                </div>
        )
    }
}
export default SearchBox;
