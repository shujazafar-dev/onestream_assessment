import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootReducers from './AppRedux/reducers';
import rootSagas from './AppRedux/sagas'


const sagaMiddleware = createSagaMiddleware();


const middlewaresToApply = [
    sagaMiddleware,
]
const devTools = (() => {
    if (process.env.NODE_ENV !== 'production') {
        return window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    }
})()

const store = compose(
    applyMiddleware(...middlewaresToApply),
    devTools,
)(createStore)(rootReducers)
sagaMiddleware.run(rootSagas)
export default store;