import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import reducers from '../reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

const configureStore = initialState => {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        ),
    );
    return createStore(reducers, initialState, enhancer)
}

const store = configureStore({});
export default store