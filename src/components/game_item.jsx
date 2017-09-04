import React, { Component } from 'react';

import { deleteGame, favoriteGame } from '../actions/games.actions.js'

class GameItem extends Component {
  constructor(props) {
    super(props);

  this.state = { toggle: false }
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (!this.state.toggle) {
      event.target.className += ' underline';
      this.setState({
        toggle: true
      })
      this.props.reducer(favoriteGame(this.props.game.id))
    } else if(this.state.toggle) {
      event.target.className = 'f2 shadow-hover dib';
      this.setState({
        toggle: false
      })
      this.props.reducer(favoriteGame(this.props.game.id))
    }
  }
  render() {
    return (
          <div className="w-40-l">
            <li
              className="f2 shadow-hover dib"
              onClick={this.handleClick}>
              {this.props.game.title}
            </li>
            <button className="fr" onClick={() => this.props.reducer(deleteGame(this.props.game.id))}>Delete</button>
          </div>
    )
  }
}

export default GameItem;
