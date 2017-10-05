import ACTIONS from '../constants'

export default {
    updateUserCommand: (msg) => {
        return {
            type: ACTIONS.UPDATE_USER_COMMAND,
            data: msg
        }
    },
    registerUserCommand: (msg) => {
        return {
            type: ACTIONS.REGISTER_USER_COMMAND,
            data: msg
        }
    },
    addToHistory: (data) => {
        return {
            type: ACTIONS.ADD_TO_HISTORY,
            data
        }
    }
}
