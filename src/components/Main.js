import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from './Header';
import Story from './Story';
import Comment from './Comment';
import styles from './Story.module.css';
class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <Story

                />
                <Comment />
            </>
        )
    }
}
export default withRouter(Main);
