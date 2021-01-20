import React, { Component } from 'react';
import styles from './MainComment.module.scss';
import '../Comment.scss';
import sirenImg from '../../../static/icons/siren-1.png';

class MainComment extends Component {
    state = {
        userIcon: (Math.floor(Math.random() * 4) + 1)
    }
    openSubCommentWindow = (e) => {
        this.setState({ toggle: !this.state.toggle })
        e.target.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.classList.toggle('hide')
        // e.target.parentElement.parentElement.parentElement.lastElementChild.classList.toggle('hide');
    }
    render() {
        return (
            <>

                <div className={styles.commentContainer}>
                    <div className="profileImgWrapper"><img style={{ width: '100%', height: '100%' }} alt="user profile" src={'/icons/userIcon-' + this.state.userIcon + '.jpg'} draggable="false" /></div>
                    <div className={styles.commentContentWrapper}>
                        <div className="commentWriter">{this.props.writer}</div>
                        <div className="commentDate">{this.props.date}</div>
                        <div className="sirenImgWrapper"><img alt="report comment" src={sirenImg} /></div>
                        <div className="writeSubComment non--draggable" onClick={(e) => this.openSubCommentWindow(e)}>{!this.state.toggle ? "답글 닫기" : "답글"}</div>
                        <div className="commentContent">{this.props.content}</div>
                    </div>
                </div>
            </>
        )
    }
}
export default MainComment;
