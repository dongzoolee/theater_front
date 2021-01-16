import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './ReadStory.module.css';
import axios from 'axios';
import Header from '../Header/Header'
import Story from '../Story/Story'
import Comment from '../Comment/Comment'
import '../Story.css';

class ReadStory extends Component {
    constructor() {
        super();
        this.state = {
            outerColor: "",
            innerColor: "",
            mainCategory: "",
            subCategory: "",
            title: "",
            date: "",
            location: "",
            content: ""
        }
    }
    componentDidMount = () => {
        let url = window.location.href;
        let urlSplit = url.split('/');
        axios
            .post('/api/read/story', { id: urlSplit[urlSplit.indexOf('story') + 1] })
            .then((res) => {
                console.log(res);
                this.setState({
                    outerColor: res.data.outerColor,
                    innerColor: res.data.innerColor,
                    mainCategory: res.data.mainCategory,
                    subCategory: res.data.subCategory,
                    title: res.data.title,
                    date: res.data.date,
                    location: res.data.location,
                    content: res.data.content
                })
            })
    }
    render() {
        return (
            <>
                <Header />
                <div className="storyContainer">
                    <Story
                        outerColor={"#F1F1F1"}
                        innerColor={"#FFFFFF"}
                        mainCategory={this.state.mainCategory}
                        subCategory={this.state.subCategory}
                        storyTitle={this.state.title}
                        storyDate={this.state.date}
                        storyLocation={this.state.location}
                        storyContent={[this.state.content]}
                    />
                    <Comment />
                </div>
            </>
        );
    }
}
export default withRouter(ReadStory);
