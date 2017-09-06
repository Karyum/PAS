import { CAR_METHOD, BUS_METHOD, TAXI_METHOD } from '../constants/action_types.js';

const Method = (state = '', action = {}) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case CAR_METHOD:
    console.log(1);
      return CAR_METHOD
    case BUS_METHOD:
    console.log(2);
      return BUS_METHOD
    case TAXI_METHOD:
    console.log(3);
      return TAXI_METHOD
    default:
    console.log(action.type);
      return state
  }
}

export default Method
