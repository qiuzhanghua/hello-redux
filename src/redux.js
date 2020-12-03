import {createStore} from "redux";

const increaseAction = { type: 'increase' }
const decreaseAction = { type: 'decrease' }
const resetAction = { type: 'reset' }

function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        case 'decrease':
            return { count: count - 1 }
        case 'reset':
            return { count: 0 }
        default:
            return state
    }
}

// map state to props
export const mapStateToProps = (state, ownProps) =>{
    return {
        value: state.count
    }
}

// Map Redux actions to component props
export const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onIncreaseClick: () => dispatch(increaseAction),
        onDecreaseClick: () => dispatch(decreaseAction),
        onResetClick: () => dispatch(resetAction)
    }
}

export default createStore(counter);