import { createStore, applyMiddleware } from 'redux';
// import persistState from 'redux-localstorage';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const storeConfigure = () => {
  const store = createStore(reducers, applyMiddleware(ReduxThunk));
  return store;
};

export default storeConfigure;
