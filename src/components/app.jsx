import React, { Component } from 'react';

import GamesList from '../containers/games_list.jsx';

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {}
  }
  render() {
    return (
      <GamesList />
    )
  }
}
