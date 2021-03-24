import axios from 'axios';
import React, { Component } from 'react';
import styles from './SubCategory.module.scss';
import SubCategoryTemplate from '../CategoryTemplate/SubCategoryTemplate';
import Layout from '../../Layout';

class SubCategory extends Component {
    state = {
        content: [],
        contentCnt: "",
        subCategoryList: []
    }
    componentDidMount() {
        const URLParams = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?')));
        const data = {
            mainCategory: this.props.match.params.mainCategory,
            subCategory: this.props.match.params.subCategory,

            page: URLParams.get('page'),
            search: URLParams.get('search')
        }
        if (URLParams.get('search'))
            axios
                .post('/api/read/searchstory', data)
                .then(res => {
                    // console.log(res.data)
                    this.setState({
                        content: res.data
                    })
                })
                .catch(err => console.log(err))
        else {
            axios
                .post('/api/read/subcatbymaincat', data)
                .then(res2 => {
                    // console.log(res)
                    this.setState({
                        subCategoryList: res2.data.subCategory
                    })
                })
                .catch(err => console.log(err))
        }
    }
    render() {
        return (
            <Layout>
                <div className={"storyContainer " + styles.MainCategoryWrapper}>
                    <SubCategoryTemplate
                        mainCategory={this.props.match.params.mainCategory}
                        subCategory={this.props.match.params.subCategory}
                        subCategoryList={this.state.subCategoryList}
                    />
                </div>
            </Layout>
        )
    }
}
export default SubCategory;
