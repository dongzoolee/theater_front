import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileCategoryInfo.module.scss';

class MobileCategoryInfo extends Component {
    componentDidMount() {
        // console.log(typeof (this.props.subCategory))
    }
    toggleSubCategoryBox = () => {
        document.querySelector('.' + styles.SubCategoryContent).classList.toggle(styles.hide)
        document.querySelector('.' + styles.Arrow + " img").classList.toggle(styles.flip)
    }
    render() {
        return (
            <>
                <div className={styles.CategoryInfo}>
                    <a href={'/' + this.props.mainCategory + '?page=1'}><div className={styles.MainCategory + " non--draggable"}>{this.props.mainCategory}</div></a>
                    {/* <div className={styles.SlashCategory + " non--draggable"}>&nbsp;&nbsp;/&nbsp;</div> */}
                    <div className={styles.SubCategoryWrapper}>
                        <div className={styles.SubCategoryHeader + " non--draggable"} onClick={this.toggleSubCategoryBox}>
                            {typeof (this.props.subCategory) === "object" ? "서브 스토리라인" : this.props.subCategory}
                            <div className={styles.Arrow}>{typeof (this.props.subCategory) === "object" ? <img className={styles.flip} src="/icons/arrow-1.png" alt="arrow" /> : ""}</div></div>
                        <div className={styles.SubCategoryContent + " " + styles.hide}>
                            {typeof (this.props.subCategory) === "object" ? this.props.subCategory.map((val, idx) => {
                                return (
                                    <Link to={'/' + this.props.mainCategory + '/' + val.subCategory}><div className={styles.SubCategory + " non--draggable"}>{val.subCategory}</div></Link>
                                )
                            }) : ""}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default MobileCategoryInfo;