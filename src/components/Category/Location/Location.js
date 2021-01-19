import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../Header/Header'
import styles from './Location.module.scss';
import SubCategoryTemplate from '../CategoryTemplate/SubCategoryTemplate';

class Location extends Component {
    state = {
        content: [],
        contentCnt: ""
    }
    componentDidMount() {
        const URLParams = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?')));
        const data = {
            location: this.props.match.params.location,
            page: URLParams.get('page')
        }
        axios
            .post('/api/read/locationcontents', data)
            .then(res => {
                this.setState({
                    content: res.data.content,
                    contentCnt: res.data.cnt
                })
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <>
                <Header />
                <div className={"storyContainer " + styles.MainCategoryWrapper}>
                    <SubCategoryTemplate
                        mainCategory={"장소"}
                        subCategory={this.props.match.params.location}
                        content={this.state.content}
                    />
                </div>
            </>
        )
    }
}
export default Location;
