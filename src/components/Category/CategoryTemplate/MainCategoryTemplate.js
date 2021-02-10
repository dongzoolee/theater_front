import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainCategoryTemplate.module.scss';
import StoryComponent from './StoryComponent';
import PaginationFooter from '../../PaginationFooter/PaginationFooter';
import MobileCategoryInfo from './MobileCategoryInfo';

function MainCategoryTemplate(props) {
    const getTextElement = (s) => {
        let span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    }
    const getImgSrc = (s) => {
        let regex = /<img.*?src="([^">]*\/([^">]*?))".*?>/g, ret;
        ret = regex.exec(s);
        if (ret)
            return ret[1];
        else
            return null;
    }
    return (
        <div className={styles.Container}>
            <div className={styles.CategoryInfo}>
                <a href='?page=1'><div className={styles.CurMainCategory + " non--draggable"}>{props.mainCategory}</div></a>
                <div className={styles.SlashCategory + " non--draggable"}>&nbsp;&nbsp;/&nbsp;</div>
                <div className={styles.SubCategoryWrapper}>
                    <div className={styles.SubCategoryHeader + " non--draggable"}>서브 스토리라인</div>
                    {props.subCategoryList.map((val, idx) => {
                        return (
                            <Link to={'/' + props.mainCategory + '/' + val.subCategory}><div className={styles.SubCategory + " non--draggable"}>{val.subCategory}</div></Link>
                        )
                    })}
                </div>
            </div>
            <hr />
            <div className={styles.MobileCategoryInfo}>
                <MobileCategoryInfo
                    mainCategory={props.mainCategory}
                    subCategoryList={props.subCategoryList}
                />
            </div>
            <div className={styles.StoryComponentWrapper}>
                {props.content.map(val => {
                    return (
                        <Link to={'/story/' + val.idx}>
                            <StoryComponent
                                title={val.title}
                                date={val.date}
                                content={getTextElement(val.content)}
                                imgUrl={getImgSrc(val.content)}
                            />
                        </Link>
                    )
                })}
                <PaginationFooter />
            </div>
        </div >
    )
}
export default MainCategoryTemplate;
