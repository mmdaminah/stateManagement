import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './pages/update'
import Tasks from './pages/tasks'
import AddTask from './pages/addTasks'
import { Provider } from 'react-redux'
import store from './redux/store'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/update" element={<Update />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/addtask" element={<AddTask />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
