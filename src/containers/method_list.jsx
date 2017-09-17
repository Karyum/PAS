import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setGuesthouse } from '../actions/index.js';

import { CAR_METHOD, BUS_METHOD, TAXI_METHOD } from '../constants/action_types.js';

class MethodList extends Component {
  constructor(props) {
    super();

    this.state = {};
    this.handleCarClick = this.handleCarClick.bind(this);
    this.handleBusClick = this.handleBusClick.bind(this);
  }
  componentWillMount() {
    const { guesthouse } = this.props.match.params;
    const filteredGhouse = this.props.guesthouses.filter((ghouse) => ghouse.title == guesthouse)
    this.props.setGuesthouse(filteredGhouse[0]);
  }

  handleCarClick(e) {
    const googleDrivingUrl = 'https://www.google.com/maps/dir/?api=1&origin=' + this.props.coords.usersLat + '%2C' + this.props.coords.usersLong + '&destination=' + this.props.guesthouse.latitude + '%2C' + this.props.guesthouse.longtitude + '&travelmode=driving'
    location.replace(googleDrivingUrl);
  }

  handleBusClick(e) {
    const googleTransitUrl = 'https://www.google.com/maps/dir/?api=1&origin=' + this.props.coords.usersLat + '%2C' + this.props.coords.usersLong + '&destination=' + this.props.guesthouse.latitude + '%2C' + this.props.guesthouse.longtitude + '&travelmode=transit';
    location.replace(googleTransitUrl);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleCarClick} className="mh2">Car method</button>
        <button onClick={this.handleBusClick} className="mh2">Bus method</button>
        <Link to='/walking' className="mh2">Walking method</Link>

        Current guesthouse: { this.props.guesthouse.title }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  guesthouses: state.guesthouses,
  guesthouse: state.current,
  coords: state.usersLocation
});

const mapDispatchToProps = {
  setGuesthouse
}

export default connect(mapStateToProps, mapDispatchToProps)(MethodList);
