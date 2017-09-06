import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import reducers from './reducers';


const storeConfigure = () => {
  const initialStore = {
    guesthouses: [
      { title: 'Liwan' },
      { title: 'Fauzi Azar' },
      { title: 'Founders & Coders' }
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
