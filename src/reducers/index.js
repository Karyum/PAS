import { combineReducers } from 'redux';

import GamesReducer from './games.reducer.js';
import VisibleReducer from './visible.reducer.js';

const rootReducers = combineReducers({
  games: GamesReducer,
  visible: VisibleReducer
})

export default rootReducers;
