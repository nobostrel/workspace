import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Scoreboard} from './containers/index';
import {mainReducer} from './reducers/index';
import './index.css';
import 'antd/dist/antd.css';

const logger = createLogger();

export const store = createStore(mainReducer, composeWithDevTools( applyMiddleware(thunk, logger) ) );

ReactDOM.render(
    <Provider store={store}>
        <Scoreboard />
    </Provider>, 
    document.getElementById('root')
);