import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import reducers from './reducers';

import { SHOW_ALL } from './constants/action_types.js';

const storeConfigure = () => {
  const initialStore = {games: [
    { title: 'Call of Duty: Black Ops 3', id: 0, favorite: false },
    { title: 'The Elder Scrolls V: Skyrim', id: 1, favorite: false },
    { title: 'World of Warcraft', id: 2, favorite: false },
    { title: 'MapleStory', id: 3, favorite: false },
  ], visible: SHOW_ALL};

  // store it in local storage
  // const enhancer = compose(
  //   persistState()
  // )

  const store = createStore(reducers, initialStore);

  return store
}

export default storeConfigure;
