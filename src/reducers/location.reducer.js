import { FOUND_LOCATION } from '../constants/action_types.js';
const LocationReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case FOUND_LOCATION:
    console.log(1);
      return {
        usersLat: action.latitude,
        usersLong: action.longitude
      }
    default:
    console.log(2);
      return state
  }
}

export default LocationReducer
