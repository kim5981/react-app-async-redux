import React from 'react';
import ReactDOM from 'react-dom';

// redux imports start
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore } from 'redux'

// import reducer from './state/reducer'
// redux imports end


// putting together the redux store end

import App from "./components/App/App.js";
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
