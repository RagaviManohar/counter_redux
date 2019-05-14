import React from 'react';
import ModifyStoreByObj from './containers/ModifyStoreByObj';
import Counter from './components/Counter';
import CounterRedux from './components/CounterRedux';
import AddCounter from './containers/AddCounter';
import RemoveCounter from './containers/RemoveCounter';
import ParentComponent from './containers/ParentComponent';

const App = () => {
    return (
        <div className="container">
            <div className="parent-child">
                <ParentComponent />
            </div>
            <Counter /><br />
            <CounterRedux />
            <div className="columns">
                <AddCounter /> <br />
                <RemoveCounter /> <br />
            </div>
            <div >
                <ModifyStoreByObj />
            </div>
        </div>
    )
}
export default App;
