import * as actionType from '../actions/ActionType';

const initialState = { msg: "Good morning" };

const msgReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case actionType.GOOD_MORNING:
            return newState = { ...state, newmessage: `${state.msg} ${action.name}` };
        default:
            return state
    }
}

export default msgReducer;