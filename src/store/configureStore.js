import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';


const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleware
    )
  )
}