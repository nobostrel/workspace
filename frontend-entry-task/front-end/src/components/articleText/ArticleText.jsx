import React from 'react';
import {NavLink} from 'react-router-dom';
import './ArticleTextStyles.css';

export const ArticleTextComponent = ({caption, text, showComments, buttonHandler, addComment}) => {
    const showCommentsButton = <input className="articleText-button" type="button" value="Показать комментарии" onClick={showComments} />;
    const hideCommentsButton = <input className="articleText-button" type="button" value="Скрыть комментарии" onClick={showComments} />;
    const addCommentsButton = <input className="articleText-button-addComment" type="button" value="Добавить комментарий" onClick={addComment} />;
    return (
        <div className="articleText-block">
            <div className="articleText-caption">
                {caption}
            </div>
            <p className="articleText-text">
                {text}
            </p>
            {buttonHandler ? hideCommentsButton : showCommentsButton }
            {!buttonHandler ? null : addCommentsButton }
            <NavLink className="goHome" to="/"> На главную </NavLink>
        </div>
    )
}
