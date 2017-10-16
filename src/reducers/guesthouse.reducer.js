/* exported action */

const GuesthouseReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PLACES':
      return action.payload;
    default:
      return state;
  }
};

export default GuesthouseReducer;
