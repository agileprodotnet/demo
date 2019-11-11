<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
>>>>>>> 180d7fa9d405379bcd9b41eef139ef9e0a14947f

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();