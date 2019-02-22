import React from 'react';

const CommentComponent = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.authorAvatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">{props.authorName}</a>
                <div className="metadata">
                    <span className="date">{props.commentedTime}</span>
                </div>
                <div className="text">{props.commentText}</div>
            </div>
        </div>
    );
};

export default CommentComponent;