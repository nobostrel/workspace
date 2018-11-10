import {combineReducers} from 'redux';
import * as consts from '../consts/index';

const initialState = {
  data: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case consts.setData:
      return {...state, data: action.payload }

    default:
      return state
    }
};

export const mainReducer = combineReducers({Reducer});
