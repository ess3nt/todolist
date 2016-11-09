/**
 * Created by Igor on 28.10.2016.
 */
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { Reducer } from '../reducers'
import thunk from 'redux-thunk'
//import { getLocalStore } from './localStor'


export default function configureStore() {
    const logger = createLogger();
//    const persistedStore = getLocalStore();
    const store = createStore(
        Reducer,
  //      persistedStore,
        applyMiddleware(thunk, logger));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').Reducer
            store.replaceReducer(nextRootReducer)
        });
    }

    return store
}





