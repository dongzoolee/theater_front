import React, { Component } from 'react';
import styles from './MainComment.module.scss';
import '../Comment.scss';
import SirenWriteSubWrapper from '../SirenWriteSubWrapper/SirenWriteSubWrapper';

class MainComment extends Component {
    state = {
        userIcon: (Math.floor(Math.random() * 4) + 1)
    }
    render() {
        return (
            <>
                <div className={styles.commentContainer}>
                    <div className="profileImgWrapper"><img alt="user profile" style={{ width: '100%', height: '100%' }} src={'/icons/userIcon-' + this.state.userIcon + '.jpg'} draggable="false" /></div>
                    <div className={styles.commentContentWrapper}>
                        <div className="WriterDateWrapper">
                            <div className="commentWriter">{this.props.writer.length >= 18 ? this.props.writer.substring(0, 10) + "..." : this.props.writer}</div>
                            <div className={styles.SirenWriteSubWrapper}>
                                <SirenWriteSubWrapper
                                    hasSubComment={this.props.hasSubComment}
                                    parentClass={this.props.parentClass}
                                    key={this._reactInternals.key}
                                    date={this.props.date}
                                />
                            </div>
                        </div>
                        <div className="commentContent">{this.props.content}</div>
                        <div className={styles.SirenWriteSubWrapperForMobile}>
                            <SirenWriteSubWrapper
                                key={this._reactInternals.key}
                                date={this.props.date}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default MainComment;
