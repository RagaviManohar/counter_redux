import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterRedux extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="cotainer">
                <div className="notification">
                    <p>
                        COUNTER WITH REDUX WORKS
                    </p>
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
