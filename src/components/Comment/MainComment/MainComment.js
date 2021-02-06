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
                <div className={styles.commentContainer} id={this._reactInternals.key}>
                    <div className="profileImgWrapper"><img alt="user profile" style={{ width: '100%', height: '100%' }} src={'/icons/userIcon-' + this.state.userIcon + '.jpg'} draggable="false" /></div>
                    <div className={styles.commentContentWrapper}>
                        <div className="WriterDateWrapper">
                            <div className="commentWriter"><span>{this.props.writer.length >= 18 ? this.props.writer.substring(0, 10) + "..." : this.props.writer}</span>{this.props.report != '0' ? <span className="reportedComment">&lt;신고된 댓글&gt;&nbsp;+{this.props.report}</span> : ""}</div>
                            <div className={styles.SirenWriteSubWrapper}>
                                <SirenWriteSubWrapper
                                    isMainComment={true}
                                    hasSubComment={this.props.hasSubComment}
                                    parentClass={styles.commentContainer}
                                    key={this._reactInternals.key}
                                    date={this.props.date}
                                />
                            </div>
                        </div>
                        <div className="commentContent">{this.props.content}</div>
                    </div>
                    <div className={styles.SirenWriteSubWrapperForMobile}>
                    <div><div>
                        <SirenWriteSubWrapper
                            isMainComment={true}
                            hasSubComment={this.props.hasSubComment}
                            parentClass={styles.commentContainer}
                            key={this._reactInternals.key}
                            date={this.props.date}
                        />
                        </div></div>
                    </div>
                </div>
            </>
        )
    }
}
export default MainComment;
