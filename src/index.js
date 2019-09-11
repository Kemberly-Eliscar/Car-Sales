import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import carReducer from './reducers/carReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

// Step1 import createStore, and create a store by passing in a reducer
const store = createStore(carReducer);


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
rootElement
);
