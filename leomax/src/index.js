import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Logo, Main, WrappedFinal, WrappedSubscriptionSelection, WrappedPaymentResult, WrappedPaymentMethod} from './containers/index';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers";
import './index.css';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import createHistory from "history/createBrowserHistory";
import {Route, Switch, NavLink} from 'react-router-dom';
import {
    ConnectedRouter,
    routerMiddleware,
    push
} from "react-router-redux";

const logger = createLogger();
const history = createHistory();
const middleware = routerMiddleware(history);

const api = store => next => action => {
    // fetch( "https://www.json-generator.com/", {
    //     headers : {
    //     'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    // }})
    //     .then(response => response.json())
    //     .catch(response => console.log(response))
    next(action);
};

export const store = createStore( reducer, composeWithDevTools( applyMiddleware(middleware,thunk, api, logger) ) );

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
                <div className="body">
                    <Logo />
                    <Main />
                    <WrappedPaymentMethod/>
                    <WrappedSubscriptionSelection/>
                    <WrappedPaymentResult />

                    <div className="final-block">
                        <WrappedFinal value="Оплатить"/>
                        <div className="final-block-text">
                            <img className="final-block-img" src={require('./img/dollar.png')} alt="not loaded =\" />
                            <p className="final-block-bottom-text-first">
                                Нет комиссий при оплате банковскими картами Яндекс.Деньгами и Qiwi
                            </p>
                            <img className="final-block-img" src={require('./img/zam.png')} alt="not loaded =\" />
                            <p className="final-block-bottom-text-second">
                                Все платежи надежно защищены и соответствуют международным стандартам
                            </p>
                        </div>
                    </div>

                    <div className="footer">
                        © 2010-2016 Домашний магазин
                        <a className="href" href="http://localhost:3000/">
                        Служба поддержки
                        </a>
                    </div>

                </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
