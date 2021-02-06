import React, { Component } from 'react';
import styles from './SubComment.module.scss';
import '../Comment.scss';
import WriteSubComment from '../WriteComment/WriteSubComment';
import axios from 'axios';
import SirenWriteSubWrapper from '../SirenWriteSubWrapper/SirenWriteSubWrapper';

class SubComment extends Component {
    state = {
        toggle: false,
        userIcon: (Math.floor(Math.random() * 4) + 1)
    }
    openSubCommentWindow = (e) => {
        this.setState({ toggle: !this.state.toggle })
    }
    reportComment = (e) => {
        if (window.confirm('댓글을 신고하시겠습니까?'))
            axios
                .post('/api/report/comment', { key: this._reactInternals.key })
                .then(alert('신고가 정상적으로 처리되었습니다'))
                .catch(console.error)
    }
    componentDidMount() {
        document.querySelectorAll('.replyTo').forEach(ele => {
            ele.addEventListener('click', () => {

            })
        })
    }
    render() {
        return (
            <>
                <div className={styles.commentContainer} id={this._reactInternals.key}>
                    <div className={"profileImgWrapper " + styles.profileImgWrapper}><img alt="user profile" style={{ width: '100%', height: '100%' }} src={process.env.PUBLIC_URL + '/icons/userIcon-' + this.state.userIcon + '.jpg'} /></div>
                    <div className={styles.commentContentWrapper}>
                        <div className="WriterDateWrapper">
                            <div className="commentWriter"><span>{this.props.writer.length >= 18 ? this.props.writer.substring(0, 10) + "..." : this.props.writer}</span>{this.props.report != '0' ? <span className="reportedComment">&lt;신고된 댓글&gt;&nbsp;+{this.props.report}</span> : ""}</div>
                            <div className={styles.SirenWriteSubWrapper}>
                                <SirenWriteSubWrapper
                                    hasSubComment={this.props.hasSubComment}
                                    parentClass={styles.commentContainer}
                                    key={this._reactInternals.key}
                                    date={this.props.date}
                                />
                            </div>
                        </div>
                        <div className="commentContent"><span dangerouslySetInnerHTML={{ __html: this.props.content }} /></div>
                    </div>
                    <div className={styles.SirenWriteSubWrapperForMobile}>
                        <div><div>
                            <SirenWriteSubWrapper
                                hasSubComment={this.props.hasSubComment}
                                parentClass={styles.commentContainer}
                                key={this._reactInternals.key}
                                date={this.props.date}
                            />
                        </div></div>
                    </div>
                </div>
                {this.state.toggle && (
                    <WriteSubComment
                        targetMainId={this._reactInternals.key.split('_')[0]}
                    />
                )}
            </>
        )
    }
}
export default SubComment;
