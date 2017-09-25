import { FOUND_DIRECTIONS } from '../constants/action_types.js';

const DirectionsReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case FOUND_DIRECTIONS:
      return {
        type: action.type,
        directions: action.directions
      }
      break;
    default:
      return state
  }
}

export default DirectionsReducer;
