import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import saga from '../saga'
import rootReducer from '../reducers'
declare global {
  interface Window {
    __PRELOADED_STATE__?: any
  }
}
const preloadedState = window.__PRELOADED_STATE__

const sagaMiddleware = createSagaMiddleware()

const clientStore = configureStore({
  reducer: combineReducers(rootReducer),
  preloadedState,
  middleware: [sagaMiddleware],
})
sagaMiddleware.run(saga)
export default clientStore
