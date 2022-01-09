// Index.js
// Author: Link Jones
// Last modified: 15/09/2021
// Version: 1.0
// Index element that inserts the app into the DOM

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

