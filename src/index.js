import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Memory from './components/memory/Memory'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Memory />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
