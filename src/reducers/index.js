import { combineReducers } from 'redux';

import GuesthouseReducer from './guesthouse.reducer.js';
import CurrentGuestHouse from './current.reducer.js';
import CurrentMethod from './currentMethod.reducer.js';

const rootReducers = combineReducers({
  guesthouses: GuesthouseReducer,
  current: CurrentGuestHouse,
  currentMethod: CurrentMethod
})

export default rootReducers;
