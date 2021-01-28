import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Header/Header'
import Story from '../Story'
import Comment from '../../Comment/Comment'
import '../../Story.css';
import AdfitWebComponent from 'react-adfit-web-component'
import Footer from '../../Footer/Footer'

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
            content: "",
            commentCnt: "",
            comment: [],
            toShowAd: false
        }
    }
    componentDidMount() {
        // GET Story
        axios
            .get('https://api.ipify.org?format=json')
            .then(res => {
                axios
                    .post('/api/read/story',
                        {
                            id: this.props.match.params.id,
                            ip: res.data.ip
                        })
                    .then((res) => {
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
                        document.getElementsByTagName('html')[0].style = "background-color: " + res.data.outerColor + ";";
                        document.getElementsByClassName('storyContainer')[0].style = "background-color: " + res.data.innerColor + ";";
                    })
            })
        // GET Comments
        axios
            .post('/api/read/comment', { id: this.props.match.params.id })
            .then((res) => {
                this.setState({
                    commentCnt: res.data.cnt,
                    comment: res.data.comment
                })

            })
            .catch((err) => {
                console.error(err);
            })
        window.onload = () => {
            document.querySelectorAll('img').forEach(ele => {
                ele.setAttribute('draggable', 'false')
                ele.style.maxWidth = "100%";
            })

        }
    }
    componentDidUpdate() {
        document.querySelectorAll('img').forEach(ele => {
            ele.setAttribute('draggable', 'false')
            ele.style.maxWidth = "100%";
        })
        setTimeout(() => {
            if (!this.state.toShowAd)
                this.setState({
                    toShowAd: true
                })
        }, 2000)
    }

    render() {
        return (
            <>
                <Header />
                <div className="storyContainer">
                    <Story
                        outerColor={this.state.outerColor}
                        innerColor={this.state.innerColor}
                        mainCategory={this.state.mainCategory}
                        subCategory={this.state.subCategory}
                        storyTitle={this.state.title}
                        storyDate={this.state.date}
                        storyLocation={this.state.location}
                        storyContent={[this.state.content]}
                    />
                    {/* {this.state.toShowAd ? <AdfitWebComponent
                        adUnit="DAN-zrThBYMLPyPfF7zx"
                    /> : ""} */}
                    <Comment
                        commentCnt={this.state.commentCnt}
                        comment={this.state.comment}
                    />
                </div>
                <Footer />
            </>
        );
    }
}
export default withRouter(ReadStory);
