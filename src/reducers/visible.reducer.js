import { SET_VISIBLE_FILTER } from '../constants/action_types.js';

const VisibleReducer = (state = '', action) => {
  switch (action.type) {
    case SET_VISIBLE_FILTER:
      return action.filter
    default:
      return state
  }
}

export default VisibleReducer;
