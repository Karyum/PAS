import { CAR_METHOD, BUS_METHOD, TAXI_METHOD } from '../constants/action_types.js';

const CurrentMethod = (state = '', action = {}) => {
  switch (action.type) {
    case CAR_METHOD:
      return 'Car Direction'
      break;
    case BUS_METHOD:
      return BUS_METHOD
      break;
    case TAXI_METHOD:
      return TAXI_METHOD
    default:
      return state
  }
}

export default CurrentMethod;
