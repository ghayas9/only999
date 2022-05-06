import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { Provider } from 'react-redux';
import store from './State/Store'

ReactDOM.render(
  <Provider store={store}>
       <App />
  </Provider>
   
,
  document.getElementById('root')
);

