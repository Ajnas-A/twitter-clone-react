import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider, } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'
import store from './reducers'
import thunk from 'redux-thunk'



const root = ReactDOM.createRoot(document.getElementById('root'));
const storeProvider = createStore(store, applyMiddleware(thunk))
root.render(

  <Provider store={storeProvider}>
    <App />
  </Provider>

);

