import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header'
import styles from './Location.module.scss';
import SubCategoryTemplate from '../CategoryTemplate/SubCategoryTemplate';

function Location(props) {
    const [content, setContent] = useState([])

    useEffect(() => {
        const URLParams = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?')));
        const data = {
            location: props.match.params.location,
            page: URLParams.get('page')
        }
        axios
            .post('/api/read/locationcontents', data)
            .then(res => {
                setContent(res.data.content)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <Header />
            <div className={"storyContainer " + styles.MainCategoryWrapper}>
                <SubCategoryTemplate
                    mainCategory={"장소"}
                    subCategory={props.match.params.location}
                    content={content}
                />
            </div>
        </>
    )
}
export default Location;
