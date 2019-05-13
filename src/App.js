import React from 'react';
import CounterRedux from "./components/CounterRedux";
import AddCounter from './containers/AddCounter';
import RemoveCounter from './containers/RemoveCounter';

const App = () => {
    return (
        <div className="container">
            <CounterRedux></CounterRedux><br />
            <div className="columns">
                <div className="column is-11">
                    <AddCounter></AddCounter> <br />
                </div>
                <div className="column auto">
                    <RemoveCounter></RemoveCounter> <br />
                </div>
            </div>
        </div>
    )
}
export default App;
