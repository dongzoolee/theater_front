import React, { Component } from 'react';
import styles from './SirenWriteSubWrapper.module.scss';
import '../Comment.scss';
import sirenImg from '../../../static/icons/siren-1.png';
import axios from 'axios';

class SirenWriteSubWrapper extends Component {
    state = {
        toggle: this.props.hasSubComment
    }
    replyTo = (e) => {
        if (!this.props.hasSubComment && this.props.isMainComment) {
            e.target.closest('.'+this.props.parentClass).parentElement.lastElementChild.classList.toggle('hide')
        }
        let trget = e.target.closest('.'+this.props.parentClass).parentElement.lastElementChild.querySelector('.commentWriteContainer')
        let replyTrget = e.target.closest('.'+this.props.parentClass).querySelector('.commentWriter').firstElementChild.textContent;
        console.log(trget.innerText)
        if (trget.innerText.trim() === "") trget.innerHTML = "";
        trget.innerHTML = trget.innerHTML.replace(new RegExp(`<span class="replyTo">@${replyTrget}</span>`, 'g'), '')
        trget.innerHTML = trget.innerHTML + '<span class="replyTo">@' + replyTrget + '</span><span>&nbsp;</span>';
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
                <div className="writeSubComment non--draggable" onClick={(e) => this.replyTo(e)}>답글</div>
            </>
        )
    }
}
export default SirenWriteSubWrapper;