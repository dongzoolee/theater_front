import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../Header/Header'
import styles from './SubCategory.module.scss';
import StoryComponent from '../CategoryTemplate/StoryComponent';
import PaginationFooter from '../PaginationFooter/PaginationFooter';
import SubCategoryTemplate from '../CategoryTemplate/SubCategoryTemplate';

class SubCategory extends Component {
    state = {
        content: [],
        contentCnt: ""
    }
    componentDidMount() {
        const URLParams = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?')));
        const data = {
            mainCategory: this.props.match.params.mainCategory,
            subCategory: this.props.match.params.subCategory,
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
    render() {
        return (
            <>
                <Header />
                <div className={"storyContainer " + styles.MainCategoryWrapper}>
                    <SubCategoryTemplate
                        mainCategory={this.props.match.params.mainCategory}
                        subCategory={this.props.match.params.subCategory}
                        content={this.state.content}
                    />
                </div>
            </>
        )
    }
}
export default SubCategory;
