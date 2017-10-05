import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import uuidv1 from 'uuid/v1'
import actions from '../../actions'
import {dynamicStory,
    storyInterface,
    staticNarration,
    storyWrapper
} from './Story.styles'

export class Story extends Component {
    static propTypes = {
        history: PropTypes.array.isRequired
    }

    isRobot(robot) {
        return !robot
            ? <span> > </span>
            : null
    }

    render() {
        const {history} = this.props
        const renderHistory = history.map(item =>
            <p
                className={dynamicStory}
                key={uuidv1()}
            >
                {this.isRobot(item.robot)}
                {item.message}
            </p>
        )

        return (
            <div className={storyWrapper}>
                <div className={storyInterface}>
                    <p className={staticNarration}>
                    You are in a maze of twisty little passages, all alike.
                    </p>
                    {renderHistory}
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({history: state.commandLine.history}),
    dispatch => bindActionCreators(actions, dispatch)
)(Story)
