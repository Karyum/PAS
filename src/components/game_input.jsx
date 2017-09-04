import React from 'react';
import UUID from 'uuid';

import { ADD_GAME } from '../constants/action_types.js';

const GameInput = ({ addGame }) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        addGame({ title: event.target[0].value, id: UUID(), type: ADD_GAME })
        event.target[0].value = '';
      }}>
      <input type="text"/>
      <input type="submit"/>
    </form>
  )
}

export default GameInput
