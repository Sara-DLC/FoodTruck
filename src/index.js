import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import * as reducers from './state/reducers';
import '../src/components/scss/global.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    trucks: reducers.trucksReducer,
    menu: reducers.menuReducer,
    currentTruckId: reducers.currentTruckIdReducer
})

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose
    ))

ReactDOM.render(
<Provider store={store}>
    <Router>
    <App />
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
