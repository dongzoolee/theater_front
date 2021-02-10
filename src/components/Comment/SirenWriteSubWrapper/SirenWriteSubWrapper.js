import React from 'react';
import '../Comment.scss';
import sirenImg from '../../../static/icons/siren-1.png';
import axios from 'axios';

function SirenWriteSubWrapper(props) {
    const replyTo = (e) => {
        if (!props.hasSubComment && props.isMainComment) {
            e.target.closest('.' + props.parentClass).parentElement.lastElementChild.classList.toggle('hide')
        }
        let trget = e.target.closest('.' + props.parentClass).parentElement.lastElementChild.querySelector('.commentWriteContainer')
        let replyTrget = e.target.closest('.' + props.parentClass).querySelector('.commentWriter').firstElementChild.textContent;
        console.log(trget.innerText)
        if (trget.innerText.trim() === "") trget.innerHTML = "";
        trget.innerHTML = trget.innerHTML.replace(new RegExp(`<span class="replyTo">@${replyTrget}</span>`, 'g'), '')
        trget.innerHTML = trget.innerHTML + '<span class="replyTo">@' + replyTrget + '</span><span>&nbsp;</span>';
    }
    const reportComment = (e) => {
        if (window.confirm('댓글을 신고하시겠습니까?'))
            axios
                .post('/api/report/comment', { key: String(props.commentId) })
                .then(alert('신고가 정상적으로 처리되었습니다'))
                .catch(console.error)
    }
    return (
        <>
            <div className="commentDate">{props.date}</div>
            <div className="sirenImgWrapper" onClick={reportComment}><img alt="report comment" src={sirenImg} /></div>
            <div className="writeSubComment non--draggable" onClick={(e) => replyTo(e)}>답글</div>
        </>
    )
}
export default SirenWriteSubWrapper;