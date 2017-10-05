import constants from '../constants'

const INITIAL_STATE = {
    message: '',
    latestCommand: '',
    history: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case constants.UPDATE_USER_COMMAND:
        return {
            ...state,
            message: action.data
        }
    case constants.REGISTER_USER_COMMAND:
        return {
            ...state,
            latestCommand: action.data,
            message: ''
        }
    case constants.ADD_TO_HISTORY:
        return {
            ...state,
            history: [...state.history, action.data]
        }
    default:
        return state
    }
}
