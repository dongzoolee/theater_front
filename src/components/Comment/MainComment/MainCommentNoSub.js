import React, { Component } from 'react';
import styles from './MainComment.module.scss';
import '../Comment.scss';
import sirenImg from '../../../static/icons/siren-1.png';
import axios from 'axios';

class MainComment extends Component {
    state = {
        userIcon: (Math.floor(Math.random() * 4) + 1)
    }
    openSubCommentWindow = (e) => {
        this.setState({ toggle: !this.state.toggle })
        // e.target.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.classList.toggle('hide')
        e.target.parentElement.parentElement.parentElement.lastElementChild.classList.toggle('hide');
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
                    <div className="profileImgWrapper"><img alt="user profile" style={{ width: '100%', height: '100%' }} src={'/icons/userIcon-' + this.state.userIcon + '.jpg'} draggable="false" /></div>
                    <div className={styles.commentContentWrapper}>
                        <div className="commentWriter">{this.props.writer}</div>
                        <div className="commentDate">{this.props.date}</div>
                        <div className="sirenImgWrapper" onClick={this.reportComment}><img alt="report comment" src={sirenImg} /></div>
                        <div className="writeSubComment non--draggable" onClick={(e) => this.openSubCommentWindow(e)}>{!this.state.toggle ? "답글" : "답글 닫기"}</div>
                        <div className="commentContent">{this.props.content}</div>
                    </div>
                </div>
            </>
        )
    }
}
export default MainComment;
