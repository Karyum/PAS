import { CHOSE_GUESTHOUSE, FOUND_LOCATION, FOUND_DIRECTIONS } from '../constants/action_types.js';

export const setGuesthouse = guesthouse => ({
    type : CHOSE_GUESTHOUSE,
    guesthouse: {
      title: guesthouse.title,
      address: guesthouse.address,
      latitude: guesthouse.latitude,
      longtitude: guesthouse.longtitude
    }
  })


export const setMethod = method => {
  return {
    type: method,
    method
  }
}

export const setLocation = position => {
  return {
    type: FOUND_LOCATION,
    latitude: position.latitude,
    longtitude: position.longitude
  }
}

export const setDirections = directions => {
  return {
    type: FOUND_DIRECTIONS,
    directions
  }
}
