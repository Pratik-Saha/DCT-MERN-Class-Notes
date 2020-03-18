import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import configureStore from './Store/configureStore'

import App from './App'

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))