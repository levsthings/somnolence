import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actions from '../../actions'
import Machine from './../../engine/machine/Machine'
import {textBox, input, commandLine} from './CommandLine.styles'

const machine = new Machine()

export class CommandLine extends PureComponent {
    static propTypes = {
        updateUserCommand: PropTypes.func.isRequired,
        registerUserCommand: PropTypes.func.isRequired,
        addToHistory: PropTypes.func.isRequired,
        message: PropTypes.string.isRequired
    }

    handleInputChange(event) {
        /**
         * Listens to input and updates 'message' value in the store.
         * @fires `updateUserCommand` redux action.
         * @todo This value should be used for autocomplete purposes.
         */
        const {updateUserCommand} = this.props
        updateUserCommand(event.target.value)
    }

    handleInputSubmit(event) {
        /**
         * @fires `registerUserCommand` redux action.
         * Saves the `message` in the store and clears the input.
         * Invokes handleResponse with the `message`
         */
        const {registerUserCommand, message} = this.props
        event.preventDefault()
        registerUserCommand(message)
        this.handleResponse(message)
    }

    handleResponse(message) {
        /**
         * @fires `addToHistory` redux action two times.
         * One for the user and one for the machine.
         */
        const {addToHistory} = this.props
        addToHistory({message: message, robot: false})
        machine.getReply(message)
            .then(res => addToHistory({message: res, robot: true}))
    }

    render() {
        return (
            <form
                className={textBox}
                onSubmit={event => this.handleInputSubmit(event)}
            >
                <span className={commandLine}> > </span>
                <input
                    className={input}
                    type='text'
                    onChange={event => this.handleInputChange(event)}
                    value={this.props.message}
                />
            </form>
        )
    }
}

export default connect(
    state => ({
        message: state.commandLine.message,
        latestCommand: state.commandLine.latestCommand}),
    dispatch => bindActionCreators(actions, dispatch)
)(CommandLine)
