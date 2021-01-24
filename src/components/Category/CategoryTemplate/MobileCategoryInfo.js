import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileCategoryInfo.module.scss';

class MobileCategoryInfo extends Component {
    componentDidMount() {
        console.log(typeof (this.props.subCategory))
    }
    render() {
        return (
            <>
                <div className={styles.CategoryInfo}>
                    <a href={'/' + this.props.mainCategory + '?page=1'}><div className={styles.MainCategory + " non--draggable"}>{this.props.mainCategory}</div></a>
                    {/* <div className={styles.SlashCategory + " non--draggable"}>&nbsp;&nbsp;/&nbsp;</div> */}
                    <div className={styles.SubCategoryWrapper}>
                        <div className={styles.SubCategoryHeader + " non--draggable"}>{typeof (this.props.subCategory) === "object" ? "서브 스토리라인" : this.props.subCategory}</div>
                        <div className={styles.SubCategoryContent}>
                            {typeof (this.props.subCategory) === "object" ? this.props.subCategory.map((val, idx) => {
                                return (
                                    <Link to={'/' + this.props.mainCategory + '/' + val.subCategory}><div className={styles.SubCategory + " non--draggable"} style={{ 'color': 'rgba(109, 109, 109, ' + (this.props.subCategory.length - idx) / this.props.subCategory.length + ')' }}>{val.subCategory}</div></Link>
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