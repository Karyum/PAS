import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { setDirections } from '../actions/index.js';
import MapView from '../components/map.jsx';

class Directions extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const { path } = this.props.match;
    if (this.props.usersLocation.usersLat && this.props.selectedGuesthouse.latitude) {
      Axios.post('/get-steps', {
        user: this.props.usersLocation,
        place: this.props.selectedGuesthouse
      })
      .then(res =>  this.props.setDirections(res.data))
      .catch(err => err)
    }
  }

  render() {
    return (
      <div>
        <h2>Walk there</h2>
        <MapView usersLocation={this.props.usersLocation} direction={this.props.directions.directions} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedGuesthouse: state.selectedGuesthouse,
  usersLocation: state.usersLocation,
  directions: state.directions
})

const mapDispatchToProps = {
  setDirections
}



export default connect(mapStateToProps, mapDispatchToProps)(Directions);
