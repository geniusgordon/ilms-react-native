import { createStore, compose } from 'redux';
import reducer from './reducers';

export default function configureStore() {
	const enhancer = compose(
    global.reduxNativeDevTools ? global.reduxNativeDevTools() : nope => nope,
  );
  const store = createStore(reducer, enhancer);
  if (global.reduxNativeDevTools) {
    global.reduxNativeDevTools.updateStore(store);
  }
  return store;
}

