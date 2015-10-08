import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import reducer from './reducers/reducers';

let initialAppState = {
    items: [
        {text: 'Item 1'},
        {text: 'Item 2'},
        {text: 'Item 3'}
    ]
};

let store = createStore(reducer, initialAppState);

React.render(
    // The child must be wrapped in a function
    // to work around an issue in React 0.13.
    <Provider store={store}>
        {() => <App />}
    </Provider>,
    document.getElementById('app')
);
