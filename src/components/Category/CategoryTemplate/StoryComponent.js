import React, { Component } from 'react';
import styles from './StoryComponent.module.scss';

class StoryComponent extends Component {
    render() {
        return (
            <div className={styles.container}>
                {this.props.imgUrl ?
                    <>
                        <div className={styles.img}><img src={this.props.imgUrl} alt={""} /></div>
                        <div className={styles.infoWrapper}>
                            <div className={styles.title}>{this.props.title}</div>
                            <div className={styles.date}>{this.props.date}</div>
                            <div className={styles.content}>{this.props.content.length >= 100 ? this.props.content.substr(0, 100) + "..." : this.props.content}</div>
                        </div>
                    </>
                    :
                    <>
                        <div className={styles.title}>{this.props.title}</div>
                        <div className={styles.date}>{this.props.date}</div>
                        <div className={styles.content}>{this.props.content.length >= 180 ? this.props.content.substr(0, 180) + "..." : this.props.content}</div>
                    </>}


            </div>
        )
    }
}
export default StoryComponent;
