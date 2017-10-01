import locationReducer from '../src/reducers/location.reducer';
import CurrentGuestHouse from '../src/reducers/current.reducer';
import DirectionsReducer from '../src/reducers/directions.reducer';
import GuesthouseReducer from '../src/reducers/guesthouse.reducer';

import { FOUND_LOCATION, CHOSE_GUESTHOUSE, FOUND_DIRECTIONS } from '../src/constants/action_types';

describe('Location Reducer', () => {
  it('Should return the users lat/lng object to state', () => {
    const action = {
      type: FOUND_LOCATION,
      latitude: 32.123124,
      longtitude: 34.12411
    };
    const state = {};
    const expected = {
      usersLat: action.latitude,
      usersLong: action.longtitude
    };
    expect(locationReducer(state, action)).toEqual(expected);
  });

  it('Should return an empty object', () => {
    const action = {};
    const state = {};
    const expected = {};
    expect(locationReducer(state, action)).toEqual(expected);
  });

  it('Should return empty object when null', () => {
    const action = {};
    const state = undefined;
    const expected = {};
    expect(locationReducer(state, action)).toEqual(expected);
  });
});

describe('Current Guesthouse reducer', () => {
  it('Find the guest that was chosen', () => {
    const action = {
      type: CHOSE_GUESTHOUSE,
      guesthouse: {
        title: 'Mario\'s Steakhouse',
        address: 'Stella maris 24',
        longtitude: 32.14142,
        latitude: 35.124856
      }
    };
    const state = {};
    const expected = action.guesthouse;
    expect(CurrentGuestHouse(state, action)).toEqual(expected);
  });

  it('Should return the initial state', () => {
    const action = {};
    const state = {};
    const expected = {};
    expect(CurrentGuestHouse(state, action)).toEqual(expected);
  });

  it('Should return the initial state when input is undefined', () => {
    const action = {};
    const state = undefined;
    const expected = { title: '' };
    expect(CurrentGuestHouse(state, action)).toEqual(expected);
  });
});

describe('Directions Reducer', () => {
  it('should return the direction to the place', () => {
    const action = {
      type: FOUND_DIRECTIONS,
      directions: [
        [32.28547, 34.12987],
        [32.0582834, 35.1398469]
      ]
    };
    const state = {};
    const expected = { directions: action.directions };
    expect(DirectionsReducer(state, action)).toEqual(expected);
  });

  it('should return the initial state', () => {
    const action = {};
    const state = {};
    const expected = {};
    expect(DirectionsReducer(state, action)).toEqual(expected);
  });

  it('should return initial state when udefined', () => {
    const action = {};
    const state = undefined;
    const expected = {};
    expect(DirectionsReducer(state, action)).toEqual(expected);
  });
});

describe('Guesthouses Reducer', () => {
  it('Should just return the state', () => {
    const action = {};
    const state = undefined;
    const expected = [];
    expect(GuesthouseReducer(state, action)).toEqual(expected);
  });
});
