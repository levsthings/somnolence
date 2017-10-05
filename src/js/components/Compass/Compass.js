import React, {PureComponent} from 'react'
import {dashboardTitle} from '../../common.styles.js'
import {compass, compassSection} from './Compass.styles'

const compassProps = {
    fill: 'none',
    stroke: '#fff',
    strokeWidth: 3
}

export default class Compass extends PureComponent {
    render() {
        return (
            <div className={compassSection}>
                <h1 className={dashboardTitle}>Compass</h1>
                <svg className={compass} viewBox='0 0 252 252'>
                    <circle style={compassProps} cx='126' cy='126' r='125' />
                    <rect x='50.95' y='151.27' style={compassProps} width='50' height='50' />
                    <rect x='50.95' y='101.27' style={compassProps} width='50' height='50' />
                    <rect x='150.95' y='101.27' style={compassProps} width='50' height='50' />
                    <rect x='100.95' y='101.27' style={compassProps} width='50' height='50' />
                    <rect x='150.95' y='51.27' style={compassProps} width='50' height='50' />
                </svg>
            </div>
        )
    }
}
