import { CHOSE_GUESTHOUSE, CAR_METHOD } from '../constants/action_types.js';

export const setGuesthouse = (guesthouse) => {
  return {
    type : CHOSE_GUESTHOUSE,
    guesthouse: {
      title: guesthouse.title
    }
  }
}

export const setMethod = (method) => {
  return {
    type: CAR_METHOD,
    method
  }
}
