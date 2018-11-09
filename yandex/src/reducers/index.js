import {combineReducers} from 'redux';
import {routerReducer} from "react-router-redux";
import * as consts from '../consts/index';

const initialState = {
  data: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case consts.flyInSetData:
      return {...state, data: action.payload }
    case consts.comeFlySetData:
      return {...state, data: action.payload }
    case consts.delayedFlightsSetData:
      return {...state, data: action.payload }
    case consts.searchSetData:
      return {...state, data: action.payload }

    default:
      return state
    }
};

export const mainReducer = combineReducers({router: routerReducer, Reducer});
