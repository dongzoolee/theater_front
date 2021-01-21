import React, { Component } from 'react';
import styles from './HotStory.module.scss';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import StoryComponent from '../Category/CategoryTemplate/StoryComponent';
import PaginationFooter from '../PaginationFooter/PaginationFooter';
import axios from 'axios';

class HotStory extends Component {
    state = {
        content: []
    }
    componentDidMount() {
        axios
            .post('/api/read/storybyhot')
            .then(res => {
                this.setState({
                    content: res.data
                })
            })
    }
    getTextElement = (s) => {
        let span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    }
    getImgSrc = (s) => {
        let regex = /<img.*?src="([^">]*\/([^">]*?))".*?>/g, ret;
        ret = regex.exec(s);
        if (ret)
            return ret[1];
        else
            return null;
    }
    render() {
        return (
            <>
                <Header />
                <div className={"storyContainer " + styles.MainCategoryWrapper}>
                    <div className={styles.Header + " non--draggable"}>story by hits</div>
                    <div className={styles.StoryComponentWrapper}>
                        {this.state.content.map(val => {
                            return (
                                <Link to={'/story/' + val.idx}>
                                    <StoryComponent
                                        title={val.title}
                                        date={val.date}
                                        content={this.getTextElement(val.content)}
                                        imgUrl={this.getImgSrc(val.content)}
                                    />
                                </Link>
                            )
                        })}
                        <PaginationFooter />
                    </div>
                </div>
            </>
        )
    }
}
export default HotStory;