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
                <h2>Counter without redux</h2>
                <div>
                    <span className="count">{this.state.count}</span><br /><br />
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button> <br /><br />
                </div>
            </div>
        );
    }
}

export default Counter;
