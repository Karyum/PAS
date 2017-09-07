import { CHOSE_GUESTHOUSE, CAR_METHOD } from '../constants/action_types.js';

export const setGuesthouse = (guesthouse) => {
  console.log(guesthouse);
  return {
    type : CHOSE_GUESTHOUSE,
    guesthouse: {
      title: guesthouse.title,
      address: guesthouse.address
    }
  }
}

export const setMethod = (method) => {
  return {
    type: method,
    method
  }
}
