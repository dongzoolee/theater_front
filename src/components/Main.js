import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header/Header';
import styles from './Main.module.css';
import './Story.css';

class Main extends Component {
    storyContainerWrapper;
    
    componentDidMount() {
        // document.querySelector('.storyontainer').style = "padding: 3.6rem 0 4rem 0;";
        window.onload = () => {
            storyContainerWrapper.style = "max-height: 86%; transition: max-height 2s ease-in 1s;";
            setTimeout(() => {
                storyContainerWrapper.style = "max-height: 86%; transition: max-height 1s ease-in;";
            }, 3000)
        }
    }
    render() {
        return (
            <>
                <Header />
                <div ref={c => { this.storyContainerWrapper = c; }} className={styles.storyContainerWrapper}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </>
        )
    }
}
export default withRouter(Main);
