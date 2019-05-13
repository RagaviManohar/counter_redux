import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducer';
import Counter from './components/Counter';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Counter /> <br />
        <App />
    </Provider>,
    document.getElementById('root')
)