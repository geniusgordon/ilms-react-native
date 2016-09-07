import { createStore } from 'redux';

const reducer = (state) => state;

export default function configureStore() {
  const store = createStore(reducer);
  return store;
}

