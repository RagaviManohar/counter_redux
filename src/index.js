import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducer';
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(reducer);

const routing = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'))
