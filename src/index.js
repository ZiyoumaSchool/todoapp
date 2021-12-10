import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './lib/redux';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './pages/App';
import TaskPage from './pages/TaskPage';
import AddTask from './components/tasks/AddTask';
//import Home from './pages/Home';
//import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <Routes>
          <Route path="/" element={<AddTask />} />
          <Route path="/taskpage" element={<TaskPage />} />  
          <Route path="/addtask" element={<AddTask />} />  
    </Routes>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
