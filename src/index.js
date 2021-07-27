import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from "redux";
import {Provider} from "react-redux";

const initialValue = {
    users: [],
    posts: [],
    comments: [],
    albums: [],
    photos: [],
    todos: [],
}

function reducer(state = initialValue, action) {
    switch (action.type) {
        case 'GET_USERS': {
            return {...state, users: action.payload}
        }
        case 'GET_POSTS': {
            return {...state, posts: action.payload}
        }
        case 'GET_COMMENTS': {
            return {...state, comments: action.payload}
        }
        case 'GET_ALBUMS': {
            return {...state, albums: action.payload}
        }
        case 'GET_PHOTOS': {
            return {...state, photos: action.payload}
        }
        case 'GET_TODOS': {
            return {...state, todos: action.payload}
        }
        default:
            return {...state}
    }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
