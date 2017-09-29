import { FOUND_LOCATION } from '../constants/action_types.js';

const LocationReducer = (state = {}, action) => {
  switch (action.type) {
    case FOUND_LOCATION:
      return {
        usersLat: action.latitude,
        usersLong: action.longtitude
      }
    default:
      return state
  }
}

export default LocationReducer
