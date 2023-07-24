import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// change the object here to check compare 
const o1 = {name: 'Bob', age: 54};
const o2 = {name: 'Bob', age: 54};


root.render(
  <React.StrictMode>
    <App obj1={o1} obj2={o2} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
