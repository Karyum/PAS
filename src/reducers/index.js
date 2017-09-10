import { combineReducers } from 'redux';

import GuesthouseReducer from './guesthouse.reducer.js';
import CurrentGuestHouse from './current.reducer.js';
import CurrentMethod from './currentMethod.reducer.js';
import LocationReducer from './location.reducer.js';

const rootReducers = combineReducers({
  guesthouses: GuesthouseReducer,
  current: CurrentGuestHouse,
  currentMethod: CurrentMethod,
  usersLocation: LocationReducer
})

export default rootReducers;
