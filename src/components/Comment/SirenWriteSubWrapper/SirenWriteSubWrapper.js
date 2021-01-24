import React, { Component } from 'react';
import styles from './SirenWriteSubWrapper.module.scss';
import '../Comment.scss';
import sirenImg from '../../../static/icons/siren-1.png';
import axios from 'axios';

class SirenWriteSubWrapper extends Component {
    state = {
        toggle: this.props.hasSubComment
    }
    openSubCommentWindow = (e) => {
        this.setState({ toggle: !this.state.toggle })
        console.log(e.target.closest("." + this.props.parentClass))
        if (e.target.closest("." + this.props.parentClass))
            e.target.closest("." + this.props.parentClass).lastElementChild.classList.toggle('hide')
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
                <div className="commentDate">{this.props.date}</div>
                <div className="sirenImgWrapper" onClick={this.reportComment}><img alt="report comment" src={sirenImg} /></div>
                <div className="writeSubComment non--draggable" onClick={(e) => this.openSubCommentWindow(e)}>{!this.state.toggle ? "답글" : "답글 닫기"}</div>
            </>
        )
    }
}
export default SirenWriteSubWrapper;