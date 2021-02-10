import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './SubCategoryTemplate.module.scss';
import StoryComponent from './StoryComponent';
import PaginationFooter from '../../PaginationFooter/PaginationFooter';
import storyLocationIcon from '../../../static/icons/location-1.png';
import MobileCategoryInfo from './MobileCategoryInfo';

function SubCategoryTemplate(props) {
    const [content, setContent] = useState([])

    useEffect(() => {
        if (props.content) {
            setContent(props.content)
        } else {
            const URLParams = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?')));
            const data = {
                mainCategory: props.mainCategory,
                subCategory: props.subCategory,
                page: URLParams.get('page')
            }
            axios
                .post('/api/read/categorycontents', data)
                .then(res => {
                    setContent(res.data.content)
                })
                .catch(err => { console.log(err) })
        }
    }, [props])

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
                <div className={styles.CurMainCategory + " non--draggable"}>{props.mainCategory === "장소" ? <Link to='/장소'><img alt="LocationIcon" src={storyLocationIcon} /></Link> : <Link to={'/' + props.mainCategory}>{props.mainCategory}</Link>}&nbsp;&nbsp;/&nbsp;</div>
                <a href='?page=1'><div className={styles.CurSubCategory + " non--draggable"}>{props.subCategory}</div></a>
                <div className={styles.SubCategoryWrapper}>
                    <div className={styles.SubCategoryHeader + " non--draggable"}>서브 스토리라인</div>
                    {props.subCategoryList ? props.subCategoryList.map((val, idx) => {
                        return (
                            <Link to={'/' + props.mainCategory + '/' + val.subCategory} key={idx}><div className={styles.SubCategory + " non--draggable"}>{val.subCategory}</div></Link>
                        )
                    }) : ""}
                </div>
            </div>
            <hr />
            <div className={styles.MobileCategoryInfo}>
                <MobileCategoryInfo
                    mainCategory={props.mainCategory}
                    subCategory={props.subCategory}
                />
            </div>
            <div className={styles.StoryComponentWrapper}>
                {content.map(val => {
                    return (
                        <Link to={'/story/' + val.idx} key={val.title}>
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
        </div>
    )
}
export default SubCategoryTemplate;
