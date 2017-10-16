import { CHOSE_GUESTHOUSE } from '../constants/action_types';

const CurrentGuestHouse = (state = { title: '' }, action) => {
  switch (action.type) {
    case CHOSE_GUESTHOUSE:
      return action.guesthouse;
    default:
      console.log(4);
      return state;
  }
};

export default CurrentGuestHouse;
