import React from 'react';

export const AddCommentComponent = ({submit, onChange}) => {
  return (
    <form onSubmit={submit} className="addComment-block">
      <input className="addComment-caption" type="text" placeholder="Введите ваше имя (не более 30 символов)"
        maxLength="30" onChange={onChange} autoFocus required />
      <textarea className="addComment-text" placeholder="Введите сообщение (не более 200 символов)" maxLength="200" onChange={onChange}  required />
      <input className="addComment-button" type="submit" value="Добавить" />
    </form>
  )
}
