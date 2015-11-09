import React        from 'react';
import ReactDOM     from 'react-dom';
import Routes       from './components/Routes.js';
import thunk        from 'redux-thunk';
import reduxPromise from 'redux-promise';

import {Router}        from 'react-router';
import {createHistory} from 'history';
import {Provider}      from 'react-redux';

let history = createHistory();

import './styles/core.scss';

import {
    createStore,
    combineReducers,
    applyMiddleware,
    composeMiddleware,
    compose
} from 'redux';

import {
    createDevTools,
    persistState
} from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import * as reducers from './reducers';

const finalCreateStore = compose(
    applyMiddleware(reduxPromise, thunk),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
)(createStore);

const reducer = combineReducers(reducers);
const store   = finalCreateStore(reducer);

let DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='H'
               changePositionKey='Q'>
    <LogMonitor />
  </DockMonitor>
);

ReactDOM.render(
    <div>
    <Provider store={store}>
        <div>
            <Router history={history} children={Routes} />
        </div>
    </Provider>
    </div>,
    document.getElementById('react')
);
