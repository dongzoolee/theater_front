// These must be the first lines in src/index.js for ie11
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './fonts/fonts.css';
import './index.css';
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </React.StrictMode >,
  document.getElementById('root')
);
