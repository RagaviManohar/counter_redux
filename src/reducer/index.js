import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import msgReducer from './msgReducer';

const counterApp = combineReducers({
    counterReducer,
    msgReducer,
})

export default counterApp