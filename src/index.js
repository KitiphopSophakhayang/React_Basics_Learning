import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './components/HelloComponent';

// //การสรา้ง component
// function HelloComponent(){
//   return <h1>หวัดดีน้องบ่าววววววว</h1>
// }

// //การสรา้ง class component
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>สวัดดีน้องบ่าว นี่คือ Class component</h1>
//   }
// }



// ReactDOM.render(data,document.getElementById('root')); //chat gpt บอกเวอร์ชั่นเก่าใช้ไม่ได้
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<HelloComponent />);
root.render(<App/>); 


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
