import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import reducers from './reducers';


const storeConfigure = () => {
  const initialStore = {
    guesthouses: [
      { title: 'Liwan', address: '6132 St 22-24, Nazareth', latitude: 32.704519, longtitude: 35.298089 },
      { title: 'Fauzi Azar', address: '6108 St, Nazareth, 16125', latitude: 32.704827, longtitude: 35.297459 },
      { title: 'AlReda', address: 'Al-Bishara St 21, Nazareth', latitude: 32.703154, longtitude: 35.297981 }
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
