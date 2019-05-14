import React from 'react';

class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                {/* The button will execute the handler function set by the parent component */}
                <button onClick={() => this.props.action(1)} > button </button>
            </div>
        )
    }
}
export default ChildComponent

