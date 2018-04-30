import React from 'react'
import { Provider } from 'react-redux'
import Main from './src/components/Main'
import store from './src/store'
import { AppRegistry } from 'react-native'

const App = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}
// export default App;
AppRegistry.registerComponent('ReactNativeSample', () => App)