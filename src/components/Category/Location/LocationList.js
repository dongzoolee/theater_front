import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header'
import styles from './Location.module.scss';

function LocationList() {
    const [locationList, setLocationList] = useState([])
    
    useEffect(() => {
        axios
            .get('/api/read/distinctlocation')
            .then(res => {
                setLocationList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <Header />
            <div className={"storyContainer " + styles.MainCategoryWrapper}>
                {locationList.map(val => {
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
export default LocationList;
