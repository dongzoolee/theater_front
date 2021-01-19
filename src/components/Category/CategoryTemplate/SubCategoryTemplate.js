import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../Header/Header'
import styles from './SubCategoryTemplate.module.scss';
import StoryComponent from './StoryComponent';
import PaginationFooter from '../PaginationFooter/PaginationFooter';
import storyLocationIcon from '../../../static/icons/location-1.png';

class SubCategoryTemplate extends Component {
    state = {
        content: []
    }
    componentDidMount = () => {
        const URLParams = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?')));
        const data = {
            mainCategory: this.props.mainCategory,
            subCategory: this.props.subCategory,
            page: URLParams.get('page')
        }
        axios
            .post('/api/read/categorycontents', data)
            .then(res => {
                this.setState({
                    content: res.data.content,
                    contentCnt: res.data.cnt
                })
            })
            .catch(err => {

            })
    }
    getTextElement = (s) => {
        let span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    }
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
            <div className={styles.Container}>
                <div className={styles.CategoryInfo}>
                    <div className={styles.MainCategory}>{this.props.mainCategory === "장소" ? <Link to='/장소'><img src={storyLocationIcon} /></Link> : <Link to={'/' + this.props.mainCategory}>{this.props.mainCategory}</Link>}&nbsp;&nbsp;/&nbsp;</div>
                    <a href='?page=1'><div className={styles.SubCategory}>{this.props.subCategory}</div></a>
                </div>
                <hr />
                <div className={styles.StoryComponentWrapper}>
                    {this.props.content.map(val => {
                        return (
                            <Link to={'/story/' + val.idx}>
                                <StoryComponent
                                    title={val.title}
                                    date={val.date}
                                    content={this.getTextElement(val.content)}
                                    imgUrl={this.getImgSrc(val.content)}
                                />
                            </Link>
                        )
                    })}
                    <PaginationFooter />
                </div>
            </div>
        )
    }
}
export default SubCategoryTemplate;
