import { CHOSE_GUESTHOUSE, CAR_METHOD, FOUND_LOCATION } from '../constants/action_types.js';

export const setGuesthouse = (guesthouse) => {
  return {
    type : CHOSE_GUESTHOUSE,
    guesthouse: {
      title: guesthouse.title,
      address: guesthouse.address,
      latitude: guesthouse.latitude,
      longtitude: guesthouse.longtitude
    }
  }
}

export const setMethod = (method) => {
  return {
    type: method,
    method
  }
}

export const setLocation = (position) => {
  return {
    type: FOUND_LOCATION,
    latitude: position.latitude,
    longitude: position.longitude
  }
}
