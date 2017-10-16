import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GuesthouseList from '../components/guesthouse_list.jsx';
import { setLocation, getPlaces } from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.getPlaces();
    navigator.geolocation.getCurrentPosition(postion => this.props.setLocation(postion.coords)
    );
  }

  render() {
    return <GuesthouseList guesthouses={this.props.allGuesthouses} />;
  }
}

const mapStateToProps = state => ({
  allGuesthouses: state.allGuesthouses
});

const mapDispatchToProps = {
  setLocation,
  getPlaces
};

App.propTypes = {
  setLocation: PropTypes.func,
  allGuesthouses: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
