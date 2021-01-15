import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from './Header';
import styles from './WriteStory.module.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

class WriteStory extends Component {
    editorRef = React.createRef();
    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
        }
    }
    componentDidMount() {
        document.body.style = "background-color:black;";
        document.getElementById('root').style = "background-color:#F1F1F1;";
    }
    handleUpdate = () => {
        this.setState({
            title: document.getElementsByTagName('input')[0].textContent,
            content: this.editorRef.current.getInstance().getHtml()
        })
    }
    handleSubmit = () => {
        
    }
    render() {
        return (
            <>
                <Header />
                <div className={styles.Container}>
                    <input
                        className={styles.storyTitle}
                        placeholder="제목을 입력하세요"
                        onChange={this.handleUpdate}
                    />
                    <Editor
                        previewStyle="vertical"
                        height="600px"
                        initialEditType="markdown"
                        ref={this.editorRef}
                        change={this.handleUpdate}
                    />
                    <button >임시저장</button>
                    <button onClick={() => this.handleSubmit}>제출</button>
                </div>
            </>
        )
    }
}
export default withRouter(WriteStory);
