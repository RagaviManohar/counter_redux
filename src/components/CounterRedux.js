import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterRedux extends Component {
    render() {
        return (
            <div className="cotainer">
                <div className="notification">
                    <h4>Counter with REDUX</h4>
                    <h1>
                        {this.props.count}
                    </h1>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.counterReducer,
    };
}

export default connect(mapStateToProps)(CounterRedux);
