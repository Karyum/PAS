import { ADD_GAME, DELETE_GAME, FAVORITE_ONE } from '../constants/action_types.js';

const GamesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_GAME:
      return [
        ...state,
        action
      ]
    case DELETE_GAME:
      return state.filter((game) => action.id != game.id)
    case FAVORITE_ONE:
      return state.map((game) => {
        if (game.id == action.id) {
          return { ...game, favorite: !game.favorite }
        } else return game
      })
    default:
      return state
  }
}

export default GamesReducer
