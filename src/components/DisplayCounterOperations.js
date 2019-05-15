import React, { Component } from 'react';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';

class DisplayCounterOperations extends Component {
    render() {
        return (
            <div>
                <p>
                    Click below button 'Add' or 'Remove',
                    then navigate to 'Counter with redux' section to view the changed counter value
                </p>
                <AddCounter /><br />
                <RemoveCounter />
            </div>
        )
    }
}

export default DisplayCounterOperations;
