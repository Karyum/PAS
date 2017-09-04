import { ADD_GAME, DELETE_GAME, FAVORITE_ONE, SET_VISIBLE_FILTER } from '../constants/action_types.js';

export const addGame = (title, id) => {
  return {
    type: ADD_GAME, title, id, hidden: false
  }
}

export const deleteGame = (id) => {
  return {
    type: DELETE_GAME, id
  }
}

export const favoriteGame = (id) => {
  return {
    type: FAVORITE_ONE, id
  }
}

export const setFilter = (filter) => {
  return {
    type: SET_VISIBLE_FILTER, filter
  }
}
