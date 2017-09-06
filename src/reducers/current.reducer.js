import { CHOSE_GUESTHOUSE } from '../constants/action_types.js';

const CurrentGuestHouse = (state = { title: '' }, action) => {
  switch (action.type) {
    case CHOSE_GUESTHOUSE:
      return action.guesthouse
      break;
    default:
      return state
  }
}

export default CurrentGuestHouse;
