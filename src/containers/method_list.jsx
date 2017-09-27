import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setGuesthouse } from '../actions/index.js';

class MethodList extends Component {
  constructor(props) {
    super();

    this.state = {};
    this.handleCarClick = this.handleCarClick.bind(this);
    this.handleBusClick = this.handleBusClick.bind(this);
  }

  componentWillMount() {
    const { guesthouse } = this.props.match.params;
    const filteredGhouse = this.props.allGuesthouses.filter((ghouse) => ghouse.title == guesthouse)
    if (filteredGhouse.length === 0) {
      return
    } else {
      this.props.setGuesthouse(filteredGhouse[0]);
    }
  }

  handleCarClick(e) {
    const googleDrivingUrl = 'https://www.google.com/maps/dir/?api=1&origin=' + this.props.usersLocation.usersLat + '%2C' + this.props.usersLocation.usersLong + '&destination=' + this.props.selectedGuesthouse.latitude + '%2C' + this.props.selectedGuesthouse.longtitude + '&travelmode=driving'
    location.replace(googleDrivingUrl);
  }

  handleBusClick(e) {
    const googleTransitUrl = 'https://www.google.com/maps/dir/?api=1&origin=' + this.props.usersLocation.usersLat + '%2C' + this.props.usersLocation.usersLong + '&destination=' + this.props.selectedGuesthouse.latitude + '%2C' + this.props.selectedGuesthouse.longtitude + '&travelmode=transit';
    location.replace(googleTransitUrl);
  }

  render() {
    if (!this.props.selectedGuesthouse.title) {
      return <h1>Guesthouse does not exist</h1>
    } else {
      return (
        <div>
          <button onClick={this.handleCarClick} className="mh2">Car method</button>
          <button onClick={this.handleBusClick} className="mh2">Bus method</button>
          <Link to='/walking' className="mh2">Walking method</Link>

          Current guesthouse: { this.props.selectedGuesthouse.title }
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  allGuesthouses: state.allGuesthouses,
  selectedGuesthouse: state.selectedGuesthouse,
  usersLocation: state.usersLocation
});

const mapDispatchToProps = {
  setGuesthouse
}

export default connect(mapStateToProps, mapDispatchToProps)(MethodList);
