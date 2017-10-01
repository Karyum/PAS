import { combineReducers } from 'redux';

import GuesthouseReducer from './guesthouse.reducer';
import CurrentGuestHouse from './current.reducer';
import LocationReducer from './location.reducer';
import DirectionsReducer from './directions.reducer';

const rootReducers = combineReducers({
  allGuesthouses: GuesthouseReducer,
  selectedGuesthouse: CurrentGuestHouse,
  usersLocation: LocationReducer,
  directions: DirectionsReducer
});

export default rootReducers;
