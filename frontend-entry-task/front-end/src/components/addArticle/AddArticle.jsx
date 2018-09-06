import React from 'react';
import {NavLink} from 'react-router-dom';

export const AddArticleComponent = ({submit, onChange}) => {
  return (
    <form className="addArticle-block" onSubmit={submit}>
      <input className="addArticle-caption" type="text" placeholder="Введите название заголовка"
        maxLength="100" onChange={onChange} autoFocus required />
      <textarea className="addArticle-text" placeholder="Введите текст статьи" onChange={onChange} required />
      <input className="addArticle-button" type="submit" value="Добавить" />
      <NavLink className="goHome" to="/"> На главную </NavLink>
    </form>
  )
}
