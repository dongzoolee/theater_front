import axios from 'axios';
import React, { Component } from 'react';
import Header from '../../Header/Header'
import styles from './Location.module.scss';

class LocationList extends Component {
    state = {
        locationList: []
    }
    componentDidMount() {
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
