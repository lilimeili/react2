import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import storageUtil from './utils/storageUtil';
import memoryUtil from './utils/memoryUtil';
// import reportWebVitals from './reportWebVitals';
//读取local中的user,保存到内存中,以后都从内存中获取
const user = storageUtil.getUser()
memoryUtil.user = user



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
