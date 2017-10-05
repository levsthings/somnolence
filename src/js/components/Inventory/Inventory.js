import React, {PureComponent} from 'react'
import {dashboardTitle} from '../../common.styles.js'
// import {} from './Inventory.styles'

export default class Inventory extends PureComponent {
    render() {
        return (
            <div>
                <h1 className={dashboardTitle}>Inventory</h1>
            </div>
        )
    }
}
