import React from 'react';
import './ArticleStyles.css';
import {NavLink} from 'react-router-dom';

export const ArticleComponent = ({caption, date, del, articlePath}) => {
  return (
      <div className="article">
        <div className="articleCaption">
                <span className="caption"> {caption} </span>
                <NavLink className="captionLink" to={`/content/${articlePath}`}> Открыть </NavLink>
        </div>
          <div className="articleDate">
                {date}
              <input className="articleButton" type="button" id={articlePath} value="Удалить" onClick={del}/>
          </div>
      </div>
  )
};
