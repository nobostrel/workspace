import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {
  ConnectedRouter,
  routerMiddleware
} from 'react-router-redux';
import {mainReducer} from "./reducers";
import {Main, Content, AddArticle, AddComment} from "./components/index";
import './index.css';

const logger = createLogger();
const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(mainReducer, composeWithDevTools( applyMiddleware(thunk, middleware, logger) ) );

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}>
      <BrowserRouter>
          <div>
            <Route exact path="/" component={Main} />
            <Route  path="/content" component={Content} />
            <Route  path="/addArticle" component={AddArticle} />
            <Route  path="/addComment" component={AddComment} />
          </div>
      </BrowserRouter>
  </ConnectedRouter>
</Provider>,
document.getElementById('root')
);
