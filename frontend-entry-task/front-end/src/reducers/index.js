import {combineReducers} from 'redux';
import {routerReducer} from "react-router-redux";
import * as consts from '../consts/index';

const initialState = {
  comments: [],
  articles: [],
  fetchingArticles: false,
  fetchingComments: false,
  showComments: false,
  addComment: false
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case consts.fetching:
      return {...state, fetchingArticles: action.fetchingArticles}
    case consts.fetchSucces:
      return {...state, articles: action.payload}
    case consts.fetchFaild:
      return {...state, fetchingArticles: action.fetchingArticles}
    case consts.fetchComments:
      return {...state, fetchingComments: action.fetchingComments}
    case consts.fetchCommentsSucces:
      return {...state, comments: action.payload}
    case consts.fetchCommentsFaild:
      return {...state, fetchingComments: action.fetchingComments}
    case consts.deleteItem:
      return {...state, articles: action.payload}
    case consts.filterArticles:
      return {...state, articles: action.payload}
    case consts.showComment:
      return {...state, showComments: action.payload}
    case consts.addComment:
      return {...state, addComment: action.payload}
    default:
      return state
    }
};

export const mainReducer = combineReducers({router: routerReducer, Reducer});
