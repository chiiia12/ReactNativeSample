import React from 'react'
import { render } from 'react-native'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
import App from './src/components/App'
import { createStore } from 'redux'

const store = createStore(rootReducer)
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)