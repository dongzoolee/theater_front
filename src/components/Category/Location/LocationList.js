import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../Header/Header'
import styles from './Location.module.scss';

class LocationList extends Component {
    state = {
        locationList: []
    }
    componentDidMount() {
        const URLParams = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?')));
        const data = {
            location: this.props.match.params.location,
            page: URLParams.get('page')
        }
        axios
            .get('/api/read/distinctlocation')
            .then(res => {
                this.setState({
                    locationList: res.data
                })
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
                    {this.state.locationList.map(val => {
                        return (
                            val.location
                        )
                    })}
                    {/* <CategoryTemplate
                        mainCategory={"장소"}
                        subCategory={this.props.match.params.location}
                        content={this.state.content}
                    /> */}
                </div>
            </>
        )
    }
}
export default LocationList;
