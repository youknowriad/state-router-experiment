import React from 'react';
import RouteRecognizerr from 'route-recognizer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import { recognizerReducer, recognizerMiddleware } from './lib/redux-recognizer';

import App from './App';
import './index.css';

const routes = [
  { path: '/' },
  { path: '/blogs/:id' },
  { path: '/blogs/:id/edit' },
  { path: '/blogs/:id/posts' }
];

const recognizer = new RouteRecognizerr();
routes.forEach(route => recognizer.add([ route ]));

const store = createStore(
  combineReducers({ router: recognizerReducer }),
  applyMiddleware(recognizerMiddleware(recognizer))
)

ReactDOM.render((
    <Provider store={ store }>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
