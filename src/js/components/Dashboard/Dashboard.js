import React, {PureComponent} from 'react'
import Compass from '../Compass/Compass'
import Inventory from '../Inventory/Inventory'
import {dashboard} from './Dashboard.styles'

export default class Dashboard extends PureComponent {
    render() {
        return (
            <div className={dashboard}>
                <Compass />
                <Inventory />
            </div>
        )
    }
}
