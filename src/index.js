import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import axios from 'axios';
import App from './App';
import * as serviceWorker from './serviceWorker';

//axios.defaults.baseURL = 'hhttp://localhost:3000/api/';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
