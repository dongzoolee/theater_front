import React, { Component } from 'react';
import Header from '../../Header/Header'
import styles from './MainCategory.module.scss';
import MainCategoryTemplate from '../CategoryTemplate/MainCategoryTemplate';
import axios from 'axios';

class MainCategory extends Component {
    state = {
        content: [],
        contentCnt: "",
        subCategory: []
    }
    componentDidMount() {
        const URLParams = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?')));
        const data = {
            mainCategory: this.props.match.params.mainCategory,
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
        else
            axios
                .post('/api/read/storybymaincategory', data)
                .then(res => {
                    this.setState({
                        content: res.data.content,
                        contentCnt: res.data.cnt,
                        subCategory: res.data.subCategory
                    })
                })
                .catch(err => console.log(err))

    }
    render() {
        return (
            <>
                <Header />
                <div className={"storyContainer " + styles.MainCategoryWrapper}>
                    <MainCategoryTemplate
                        subCategoryList={this.state.subCategory}
                        mainCategory={this.props.match.params.mainCategory}
                        content={this.state.content}
                    />
                </div>
            </>
        )
    }
}
export default MainCategory;
