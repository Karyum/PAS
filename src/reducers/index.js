import { combineReducers } from 'redux';

import GuesthouseReducer from './guesthouse.reducer.js';
import CurrentGuestHouse from './current.reducer.js';
import LocationReducer from './location.reducer.js';
import DirectionsReducer from './directions.reducer.js';

const rootReducers = combineReducers({
  allGuesthouses: GuesthouseReducer,
  selectedGuesthouse: CurrentGuestHouse,
  usersLocation: LocationReducer,
  directions: DirectionsReducer
});

export default rootReducers;
