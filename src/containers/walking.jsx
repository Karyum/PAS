import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Axios from 'axios';

import { setDirections } from '../actions/index';
import MapView from '../components/map.jsx';

class Directions extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    if (this.props.usersLocation.usersLat && this.props.selectedGuesthouse.latitude) {
      Axios.post('/get-steps', {
        user: this.props.usersLocation,
        place: this.props.selectedGuesthouse
      })
        .then(res => this.props.setDirections(res.data))
        .catch(err => err);
    }
  }

  render() {
    return (
      <div>
        <h2>Walk there</h2>
        <MapView usersLocation={this.props.usersLocation} direction={this.props.directions.directions} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  selectedGuesthouse: state.selectedGuesthouse,
  usersLocation: state.usersLocation,
  directions: state.directions
});

const mapDispatchToProps = {
  setDirections
};

Directions.propTypes = {
  directions: PropTypes.object,
  setDirections: PropTypes.func,
  selectedGuesthouse: PropTypes.shape({
    title: PropTypes.string,
    address: PropTypes.string,
    latitude: PropTypes.number,
    longtitude: PropTypes.number
  }),
  usersLocation: PropTypes.shape({
    usersLat: PropTypes.number,
    usersLong: PropTypes.number
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Directions);
