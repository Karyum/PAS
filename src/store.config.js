import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import reducers from './reducers';


const storeConfigure = () => {
  const initialStore = {
    guesthouses: [
      { title: 'Liwan', address: '6132 St 22-24, Nazareth', latitude: 32.7017263, longtitude: 35.297192100000004 },
      { title: 'Fauzi Azar', address: '6108 St, Nazareth, 16125' },
      { title: 'Founders & Coders', address: 'Al-Bishara St 6, Nazareth, 16100' }
    ],
    current: {},
    currentMethod: ''
  };

  // store it in local storage
  // const enhancer = compose(
  //   persistState()
  // )

  const store = createStore(reducers, initialStore);

  return store
}

export default storeConfigure;
