import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileCategoryInfo.module.scss';

function MobileCategoryInfo(props) {
    const SubCategoryContent = useRef();
    const toggleSubCategoryBox = () => {
        SubCategoryContent.current.classList.toggle(styles.hide)
        document.querySelector('.' + styles.Arrow + " img").classList.toggle(styles.flip)
    }
    return (
        <>
            <div className={styles.CategoryInfo}>
                <a href={'/' + props.mainCategory + '?page=1'}><div className={styles.MainCategory + " non--draggable"}>{props.mainCategory}</div></a>
                {/* <div className={styles.SlashCategory + " non--draggable"}>&nbsp;&nbsp;/&nbsp;</div> */}
                <div className={styles.SubCategoryWrapper}>
                    <div className={styles.SubCategoryHeader + " non--draggable"} onClick={toggleSubCategoryBox}>
                        {typeof (props.subCategoryList) === "object" ? "서브 스토리라인" : props.subCategory}
                        <div className={styles.Arrow}>{typeof (props.subCategoryList) === "object" ? <img className={styles.flip} src="/icons/arrow-1.png" alt="arrow" /> : ""}</div></div>
                    <div ref={SubCategoryContent} className={styles.SubCategoryContent + " " + styles.hide}>
                        {typeof (props.subCategoryList) === "object" ? props.subCategoryList.map((val, idx) => {
                            return (
                                <Link to={'/' + props.mainCategory + '/' + val.subCategory}><div className={styles.SubCategory + " non--draggable"}>{val.subCategory}</div></Link>
                            )
                        }) : ""}
                    </div>
                </div>
            </div>
        </>
    )
}
export default MobileCategoryInfo;