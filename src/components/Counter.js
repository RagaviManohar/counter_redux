import React from "react";

class Counter extends React.Component {
    state = { count: 0 };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div className="counter">
                <h4>Counter without REDUX</h4>
                <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.increment}>+</button><br /><br />
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;
