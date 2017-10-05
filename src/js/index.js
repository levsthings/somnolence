import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import createStoreWithMiddleware from './store'
import Game from './components/Game/Game'

ReactDOM.render(
    <Provider store={createStoreWithMiddleware()}>
        <Game />
    </Provider>,
    document.getElementById('app')
)
