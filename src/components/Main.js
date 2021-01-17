import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from './Header/Header';
import Story from './Story/Story';
import Comment from './Comment/Comment';

class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="storyContainer">
                    <Story
                        outerColor={"#F1F1F1"}
                        innerColor={"#FFFFFF"}
                        mainCategory={"일기"}
                        subCategory={"개발일기"}
                        storyTitle={"쉬다가세요"}
                        storyDate={"2021년 1월 4일 오후 9시"}
                        storyLocation={"서울시 마포구"}
                        storyContent={`<span>어서오세요</span><br/>
                    <span>모두가 쉬어갈 수 있는 블로그를 만들었습니다</span>,<br/><br/>
                    <span>기본적으로 익명댓글 작성이 가능합니다.</span><br/>
                    <span>로그인 하시면 본인의 댓글에 대한 답글 알림을 받아보실 수 있으며,</span><br/>
                    <span>본인이 작성한 댓글을 한 곳에서 모아보실 수 있습니다.</span><br/><br/>
                    <span>다시 한 번 반갑습니다.</span>
                    `}
                    />
                </div>

            </>
        )
    }
}
export default withRouter(Main);
