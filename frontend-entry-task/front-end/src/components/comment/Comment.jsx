import React from 'react';
import './CommentStyles.css';

export const CommentComponent = ({name, text}) => {
    return (
        <div className="comment-block">
            <div className="comment-name">
                {name}
            </div>
            <div className="comment-text">
                {text}
            </div>
        </div>
    )
}
