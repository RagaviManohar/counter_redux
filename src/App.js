import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom"
import routes from './routes';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/parent_child">
                        Update state value from child
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/counter">
                        Counter without redux
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/counter_redux">
                        Counter with redux
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/add_remove_counter">
                        Counter operations for 'counter with redux'
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/modify_store">
                        Modify store by object
                    </NavLink>
                </li>
            </ul>
            <Switch>
                {routes.map(route => <Route key={route.path} {...route} />)}
            </Switch>
        </div>
    )
}

export default App;
