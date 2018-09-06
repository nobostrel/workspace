import {combineReducers} from 'redux';
import '../actions/index';
import {
    surpriseCodeSubscribe,
    selectedOptions,
    renewTheSubscriptions,
    addingDiscount,
    selectedDueDate
} from '../actions/Consts';
import {routerReducer} from "react-router-redux";

export const initialState = {
    selectedOptions: null,
    surpriseCodeSubscribe: false,
    dueDates: [
        {
            dueDate: '2year',
            price: 2880
        },
        {
            dueDate: '1year',
            price: 1500
        },
        {
            dueDate: '6month',
            price: 780
        }
    ],
    selectedDueDate: null,
    renewTheSubscriptions: null,
    addingDiscount: false
};

function Reducer(state = initialState, action) {
    switch (action.type) {
        case surpriseCodeSubscribe:
            return {...state, surpriseCodeSubscribe: action.surpriseCodeSubscribe};
        case selectedOptions:
            return {...state, selectedOptions: action.selectedOptions};
        case renewTheSubscriptions:
            return {...state, renewTheSubscriptions: action.renewTheSubscriptions};
        case addingDiscount:
            return {...state, addingDiscount: action.addingDiscount};
        case selectedDueDate:
            return {...state, selectedDueDate: action.selectedDueDate};
        default:
            return state;
    }
}

export let reducer = combineReducers({Reducer, router: routerReducer});
