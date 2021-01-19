import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../Header/Header'
import styles from './MainCategoryTemplate.module.scss';
import StoryComponent from './StoryComponent';
import PaginationFooter from '../PaginationFooter/PaginationFooter';
import storyLocationIcon from '../../../static/icons/location-1.png';

class MainCategoryTemplate extends Component {
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
                    <a href='?page=1'><div className={styles.MainCategory}>{this.props.mainCategory}</div></a>
                    <div className={styles.SlashCategory}>&nbsp;&nbsp;/&nbsp;</div>
                    <div className={styles.SubCategoryWrapper}>
                        {this.props.subCategory.map(val => {
                            return (
                                <Link to={'/' + this.props.mainCategory + '/' + val.subCategory}><div className={styles.SubCategory}>{val.subCategory}</div></Link>
                            )
                        })}
                    </div>
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
export default MainCategoryTemplate;
