import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import reducers from './reducers';


const storeConfigure = () => {
  const initialStore = {};
  
  // store it in local storage
  // const enhancer = compose(
  //   persistState()
  // )

  const store = createStore(reducers, initialStore);

  return store
}

export default storeConfigure;
