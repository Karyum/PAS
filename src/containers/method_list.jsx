import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { setGuesthouse } from '../actions/index';

class MethodList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleCarClick = this.handleCarClick.bind(this);
    this.handleBusClick = this.handleBusClick.bind(this);
  }

  componentWillMount() {
    const { guesthouse } = this.props.match.params;
    const filteredGhouse = this.props.allGuesthouses.filter(ghouse => ghouse.title === guesthouse);
    if (filteredGhouse.length !== 0) {
      this.props.setGuesthouse(filteredGhouse[0]);
    }
  }

  handleCarClick() {
    const googleDrivingUrl = `https://www.google.com/maps/dir/?api=1&origin=${this.props.usersLocation.usersLat}%2C${this.props.usersLocation.usersLong}&destination=${this.props.selectedGuesthouse.latitude}%2C${this.props.selectedGuesthouse.longtitude}&travelmode=driving`;
    location.replace(googleDrivingUrl);
  }

  handleBusClick() {
    const googleTransitUrl = `https://www.google.com/maps/dir/?api=1&origin=${this.props.usersLocation.usersLat}%2C${this.props.usersLocation.usersLong}&destination=${this.props.selectedGuesthouse.latitude}%2C${this.props.selectedGuesthouse.longtitude}&travelmode=transit`;
    location.replace(googleTransitUrl);
  }

  render() {
    if (!this.props.selectedGuesthouse.title) {
      return <h1>Guesthouse does not exist</h1>;
    }
    return (
      <div>
        <button onClick={this.handleCarClick} className="mh2">Car method</button>
        <button onClick={this.handleBusClick} className="mh2">Bus method</button>
        <Link to='/walking' className="mh2">Walking method</Link>

        Current guesthouse: { this.props.selectedGuesthouse.title }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allGuesthouses: state.allGuesthouses,
  selectedGuesthouse: state.selectedGuesthouse,
  usersLocation: state.usersLocation
});

const mapDispatchToProps = {
  setGuesthouse
};

MethodList.propTypes = {
  allGuesthouses: PropTypes.array,
  selectedGuesthouse: PropTypes.shape({
    title: PropTypes.string,
    address: PropTypes.string,
    latitude: PropTypes.number,
    longtitude: PropTypes.number
  }),
  usersLocation: PropTypes.shape({
    usersLat: PropTypes.number,
    usersLong: PropTypes.number
  }),
  setGuesthouse: PropTypes.func,
  match: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(MethodList);
