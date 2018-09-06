import {fetching, fetchSucces, fetchFaild} from '../consts/index';

export const fetchArticles = (dispatch) => {
  dispatch(
      {
        type: fetching,
        fetchingArticles: true
      }
  )
  fetch('/api/article')
    .then(response => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json()
    })
    .then(json => {
      setTimeout( () => {
        dispatch({
          type: fetching,
          fetchingArticles: false
        })
        dispatch({
          type: fetchSucces,
          payload: json
        })
      }, 2000);
    })
    .catch(error => {
      console.error("Ошибка загрузки данных с сервера \n", error);
      dispatch({
        type: fetchFaild,
        fetchingArticles: false
      })
    })
}
