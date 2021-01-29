import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainCategoryTemplate.module.scss';
import StoryComponent from './StoryComponent';
import PaginationFooter from '../../PaginationFooter/PaginationFooter';
import MobileCategoryInfo from './MobileCategoryInfo';
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
                    <a href='?page=1'><div className={styles.MainCategory + " non--draggable"}>{this.props.mainCategory}</div></a>
                    <div className={styles.SlashCategory + " non--draggable"}>&nbsp;&nbsp;/&nbsp;</div>
                    <div className={styles.SubCategoryWrapper}>
                        <div className={styles.SubCategoryHeader + " non--draggable"}>서브 스토리라인</div>
                        {this.props.subCategory.map((val, idx) => {
                            return (
                                <Link to={'/' + this.props.mainCategory + '/' + val.subCategory}><div className={styles.SubCategory + " non--draggable"}>{val.subCategory}</div></Link>
                            )
                        })}
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
            </div >
        )
    }
}
export default MainCategoryTemplate;
