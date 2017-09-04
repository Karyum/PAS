import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameInput from '../components/game_input.jsx';
import GameItem from '../components/game_item.jsx';
import Footer from '../components/footer.jsx';
import { setFilter } from '../actions/games.actions.js';
import { SHOW_FAVORITE, SHOW_UNFAVORITE, SHOW_ALL } from '../constants/action_types.js';

class GamesList extends Component {

  toggleVisible(filter = '') {
    switch (filter) {
      case SHOW_FAVORITE:
        return this.props.games.filter((game) => game.favorite)
      case SHOW_UNFAVORITE:
        return this.props.games.filter((game) => !game.favorite)
      default:
        return this.props.games;
    }
  }

  render() {
    return (
    <div>
      <ul>
        {
          this.toggleVisible(this.props.visible).map((game) => <GameItem key={game.id} game={game} reducer={this.props.reducer}/>)
        }
      </ul>
      <GameInput addGame={this.props.reducer}/>
      <Footer setFilter={this.props.setFilter}/>
    </div>
  )
  }
}

const mapStateToProps = (state) => ({
    games: state.games,
    visible: state.visible
  })

const mapDispatchToProps = (dispatch) => ({
  setFilter(filter) { dispatch(setFilter(filter)) },
  reducer(action) { dispatch(action) },
})

export default connect(mapStateToProps, mapDispatchToProps)(GamesList)
