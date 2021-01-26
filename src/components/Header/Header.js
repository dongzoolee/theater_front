import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import HeaderRouter from './HeaderRouter/HeaderRouter';
import './Header.scss';
import 'pace-progressbar';
import 'pace-progressbar/themes/yellow/pace-theme-minimal.css';

class Header extends Component {
    paceOptions = {
        ajax: false, // disabled
        document: false, // disabled
        eventLag: false, // disabled
        elements: {
            selectors: ['.pace--loader']
        }
    };
    state = {
        menuBarOn: false
    }
    OpenMenuBar = () => {
        if (this.state.menuBarOn)
            this.setState({
                menuBarOn: false
            })
        else {
            document.querySelector("." + styles.menuBar).classList.toggle('hide');
            this.setState({
                menuBarOn: true
            })
        }
    }
    render() {
        return (
            <>
                <div className={"header"}>
                    {this.state.menuBarOn ? "" :
                        <>
                            <div className={styles.menuBar} onClick={this.OpenMenuBar}>
                                <img src="/icons/menuBar-1.png" />
                            </div>
                        </>
                    }
                    {this.state.menuBarOn ? <div className={styles.MenuBarHeaderRouter}><HeaderRouter /></div> : ""}
                    <div className={styles.ResponsiveHeaderRouter}>
                        <HeaderRouter />
                    </div>
                    {this.state.menuBarOn ? "" : <span className={styles.thsixIcon + " non--draggable "}><a href="/">36부작</a></span>}

                </div>
            </>
        )
    }
}
export default Header;
