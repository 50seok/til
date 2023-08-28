import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 개발 시 유용하지만 render를 2번 함
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  // <App />
);