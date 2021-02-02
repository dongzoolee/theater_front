import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './SubCategoryTemplate.module.scss';
import StoryComponent from './StoryComponent';
import PaginationFooter from '../../PaginationFooter/PaginationFooter';
import storyLocationIcon from '../../../static/icons/location-1.png';
import MobileCategoryInfo from './MobileCategoryInfo';

class SubCategoryTemplate extends Component {
    state = {
        content: []
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            if (this.props.content) {
                this.setState({
                    content: this.props.content
                })
            } else {
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
        }
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
                    <div className={styles.CurMainCategory + " non--draggable"}>{this.props.mainCategory === "장소" ? <Link to='/장소'><img alt="LocationIcon" src={storyLocationIcon} /></Link> : <Link to={'/' + this.props.mainCategory}>{this.props.mainCategory}</Link>}&nbsp;&nbsp;/&nbsp;</div>
                    <a href='?page=1'><div className={styles.CurSubCategory + " non--draggable"}>{this.props.subCategory}</div></a>
                    <div className={styles.SubCategoryWrapper}>
                        <div className={styles.SubCategoryHeader + " non--draggable"}>서브 스토리라인</div>
                        {this.props.subCategoryList ? this.props.subCategoryList.map((val, idx) => {
                            return (
                                <Link to={'/' + this.props.mainCategory + '/' + val.subCategory} key={idx}><div className={styles.SubCategory + " non--draggable"}>{val.subCategory}</div></Link>
                            )
                        }) : ""}
                    </div>
                </div>
                <hr />
                <div className={styles.MobileCategoryInfo}>
                    <MobileCategoryInfo
                        mainCategory={this.props.mainCategory}
                        subCategory={this.props.subCategory}
                    />
                </div>
                <div className={styles.StoryComponentWrapper}>
                    {this.state.content.map(val => {
                        return (
                            <Link to={'/story/' + val.idx} key={val.title}>
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
