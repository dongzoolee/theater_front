import React, { useState, useRef, memo } from 'react';
import styles from './Header.module.scss';
import HeaderRouter from './HeaderRouter/HeaderRouter';
import './Header.scss';
// import 'pace-progressbar';
// import 'pace-progressbar/themes/yellow/pace-theme-minimal.css';

function Header() {
    const menuBar = useRef();
    const [menuBarOn, setMenuBarOn] = useState(false);
    // paceOptions = {
    //     ajax: false, // disabled
    //     document: false, // disabled
    //     eventLag: false, // disabled
    //     elements: {
    //         selectors: ['.pace--loader']
    //     }
    // };
    const OpenMenuBar = () => {
        if (menuBarOn)
            setMenuBarOn(false)
        else {
            menuBar.current.classList.toggle('hide');
            setMenuBarOn(true)
        }
    }
    return (
        <>
            <div className={"header"}>
                {menuBarOn ? "" :
                    <>
                        <div ref={menuBar} className={styles.menuBar} onClick={OpenMenuBar}>
                            <img src="/icons/menuBar-1.png" alt="mobile-menu-bar" />
                        </div>
                    </>
                }
                {menuBarOn ? <div className={styles.MenuBarHeaderRouter}><HeaderRouter /></div> : ""}
                <div className={styles.ResponsiveHeaderRouter}>
                    <HeaderRouter />
                </div>
                {menuBarOn ? "" : <span className={styles.thsixIcon + " non--draggable "}><a href="/">36부작</a></span>}
            </div>
        </>
    )
}
export default memo(Header);