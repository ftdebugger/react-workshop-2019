import React from 'react';

import {Feed} from './components/Feed/Feed';
import {createStore, MiddlewareAPI, Dispatch, Action, compose, applyMiddleware} from 'redux';
import {rootReducer} from './components/reducer/rootReducer';
import {Provider} from 'react-redux';
import {State} from './schema/State';
import {ReduxAction, ReduxDispatch, ReduxThunkAction} from './actions';
import {ConnectedFeed} from './components/ConnectedFeed/ConnectedFeed';

let win: any = window;

function middleware({getState, dispatch}: MiddlewareAPI<ReduxDispatch, State>) {
    return (next: ReduxDispatch) => {
        return (action: ReduxAction | ReduxThunkAction) => {
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }

            return next(action);
        };
    };
}

let store = createStore<State, ReduxAction, {}, {}>(
    rootReducer,
    compose(
        applyMiddleware(middleware),
        win.__REDUX_DEVTOOLS_EXTENSION__ ? win.__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f,
    )
);

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedFeed />
        </Provider>
    );
}
