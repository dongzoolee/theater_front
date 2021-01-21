import React, { Component } from 'react';
import styles from './SubComment.module.scss';
import '../Comment.scss';
import sirenImg from '../../../static/icons/siren-1.png';
import WriteSubComment from '../WriteComment/WriteSubComment';
import axios from 'axios';

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
    render() {
        return (
            <>
                <div className={styles.commentContainer}>
                    <div className="profileImgWrapper"><img alt="user profile" style={{ width: '100%', height: '100%' }} src={process.env.PUBLIC_URL + '/icons/userIcon-' + this.state.userIcon + '.jpg'} /></div>
                    <div className={styles.commentContentWrapper}>
                        <div className="commentWriter">{this.props.writer === '-1' ? "익명" : this.props.writer}</div>
                        <div className="commentDate">{this.props.date}</div>
                        <div className="sirenImgWrapper" onClick={this.reportComment}><img alt="report comment" src={sirenImg} /></div>
                        <div className="writeSubComment non--draggable" onClick={(e) => this.openSubCommentWindow(e)}>{!this.state.toggle ? "답글" : "답글 닫기"}</div>
                        <div className="commentContent">{this.props.content}</div>
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
