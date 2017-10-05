import React, {PureComponent} from 'react'
import CommandLine from '../CommandLine/CommandLine'
import Dashboard from '../Dashboard/Dashboard'
import Story from '../Story/Story'

import 'glamor/reset'
import {css} from 'glamor'
import {wrapper, upperGrid, lowerGrid} from './Game.styles'
import gauntlet from '../../../img/gauntlet.cur'

css.global(
    'html', {
        fontFamily: 'VT323, monospace',
        fontWeight: '400',
        color: 'white',
        cursor: `url(${gauntlet}), auto`
    }
)

export default class Game extends PureComponent {
    render() {
        return (
            <div className={wrapper}>
                <div className={upperGrid}>
                    <Story />
                    <Dashboard />
                </div>
                <div className={lowerGrid}>
                    <CommandLine />
                </div>
            </div>
        )
    }
}
