import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import reducers from '../reducers';

export default function createStoreByInitState(initState) {
    const middlewares = [thunk, routerMiddleware(browserHistory)];

    let composeEnhancers = compose;

    if (process.env.NODE_ENV === 'development') {
        /* eslint-disable no-underscore-dangle */
        composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        /* eslint-enable */
    }

    const store = createStore(
        combineReducers(reducers),
        initState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    return store;
}
