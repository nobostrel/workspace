import {fetchComments, fetchCommentsSucces, fetchCommentsFaild} from '../consts/index';

export const fetchCommentsApi = (dispatch) => {
  dispatch(
      {
        type: fetchComments,
        fetchingComments: true
      }
  )
  fetch('/api/comment')
    .then(response => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json()
    })
    .then(json => {
      setTimeout( () => {
        dispatch({
          type: fetchComments,
          fetchingComments: false
        })
        dispatch({
          type: fetchCommentsSucces,
          payload: json
        })
      }, 2000);
    })
    .catch(error => {
      console.error("Ошибка загрузки данных с сервера \n", error);
      dispatch({
        type: fetchCommentsFaild,
        fetchingComments: false
      })
    })
}
