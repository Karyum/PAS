import { CHOSE_GUESTHOUSE } from '../constants/action_types';

const CurrentGuestHouse = (state = { title: '' }, action) => {
  switch (action.type) {
    case CHOSE_GUESTHOUSE:
      return action.guesthouse;
    default:
      return state;
  }
};

export default CurrentGuestHouse;
