
import React from 'react';
import { connect } from 'react-redux';
import { modifyStoreByObj } from '../actions';
import { bindActionCreators } from 'redux';

class ModifyStoreByObj extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.state = { name: '' };
    }

    handleNameChange(name) {
        this.setState({
            name: name,
        })
    }

    render() {
        return (
            <div className="container">
                <form>
                    <h4>Modify store with object in reducer</h4>
                    <div className="field is-grouped">
                        <div className="control">
                            <input onChange={event => {
                                this.handleNameChange(event.target.value);
                            }} />
                            <div>
                                State name - <h4>{this.state.name}</h4>
                            </div>
                        </div><br />
                        <div>
                            <button className="button is-primary"
                                onClick={(e) => { e.preventDefault(); this.props.modifyStoreByObj(this.state.name) }}>
                                Show
                            </button>
                            <div>
                                Props name - <h4>{this.props.name}</h4>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.msgReducer.newmessage,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ modifyStoreByObj }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyStoreByObj);
