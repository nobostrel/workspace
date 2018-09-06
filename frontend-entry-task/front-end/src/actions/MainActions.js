import {fetchArticles} from '../api/MainApi';
import {fetchCommentsApi} from '../api/ContentApi';
import {deleteItem, filterArticles, showComment, addComment} from '../consts/index';

export const FetchDataApi = () => {
  return fetchArticles;
}

export const FetchCommentsAction = () => {
  return fetchCommentsApi;
}

export const deleteArticle = delItem => {
  return {
    type: deleteItem,
    payload: delItem
  }
}

export const filterArticle = filter => {
  return {
    type: filterArticles,
    payload: filter
  }
}

export const showCommentAction = value => {
  return {
    type: showComment,
    payload: value
  }
}

export const addCommentAction = value => {
  return {
    type: addComment,
    payload: value
  }
}
