import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props)

        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);

        // Set some state
        this.state = {
            idChanged: false,
            id: 0
        };
    }

    // This method will be sent to the child component
    handler(id) {
        this.setState({
            idChanged: true,
            id: id
        });
    }

    // Render the child component and set the action property with the handler as value
    render() {
        return (
            <div>
                <h4>Changing state value from child to parent</h4> <br />
                <ChildComponent action={this.handler} /><br />
                <div>{this.state.id}</div>
            </div>
        );
    }
}

export default ParentComponent
