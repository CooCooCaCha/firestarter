import React        from 'react';
import ReactDOM     from 'react-dom';
import routes       from './routes.js';
import thunk        from 'redux-thunk';
import reduxPromise from 'redux-promise';

import {Router}        from 'react-router';
import {createHistory} from 'history';
import {Provider}      from 'react-redux';

let history = createHistory();

import './styles/core.css';

import {
    DevTools, 
    DebugPanel, 
    LogMonitor 
} from 'redux-devtools/lib/react';

import {
    createStore,
    combineReducers,
    applyMiddleware,
    composeMiddleware,
    compose
} from 'redux';

import {
    devTools,
    persistState
} from 'redux-devtools';

import * as reducers from './reducers';

const finalCreateStore = compose(
    applyMiddleware(reduxPromise, thunk),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
);

const reducer = combineReducers(reducers);
const store   = finalCreateStore(reducer);

ReactDOM.render(
    <div>
    <Provider store={store}>
        {() => <Router history={history} children={routes} />}
    </Provider>

    <DebugPanel top bottom right>
        <DevTools store={store}
                monitor={LogMonitor} />
    </DebugPanel>
    </div>,
    document.getElementById('react')
);
