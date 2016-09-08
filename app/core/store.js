import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import saga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    global.reduxNativeDevTools ? global.reduxNativeDevTools() : nope => nope,
  );
  const store = createStore(reducer, enhancer);
  sagaMiddleware.run(saga);

  if (global.reduxNativeDevTools) {
    global.reduxNativeDevTools.updateStore(store);
  }
  return store;
}

