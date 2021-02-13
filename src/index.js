import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase'
import {BrowserRouter} from "react-router-dom";

import store from './redux/store';
import {Provider} from "react-redux";

firebase.initializeApp({
    apiKey: "AIzaSyBT-5M3hmVV6gxz-0hUKHlkwh7fhj_T7x4",
    authDomain: "testapp-701f5.firebaseapp.com",
    projectId: "testapp-701f5",
    storageBucket: "testapp-701f5.appspot.com",
    messagingSenderId: "713756878052",
    appId: "1:713756878052:web:eae903d89402d9403878f1"
});


ReactDOM.render(

   <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
   </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
