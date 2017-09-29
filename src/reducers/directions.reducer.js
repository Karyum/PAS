import { FOUND_DIRECTIONS } from '../constants/action_types.js';

const DirectionsReducer = (state = {}, action) => {
  switch (action.type) {
    case FOUND_DIRECTIONS:
      return {
        directions: action.directions
      }
    default:
      return state
  }
}

export default DirectionsReducer;
