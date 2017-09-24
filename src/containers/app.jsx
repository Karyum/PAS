import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuesthouseList from '../components/guesthouse_list.jsx';
import { setLocation } from '../actions/index.js';

class App extends Component {
  constructor(props) {
    super();

    this.state = {}
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((postion) => {
      return this.props.setLocation(postion.coords)
    })
  }

  render() {
    return <GuesthouseList guesthouses={this.props.guesthouses} />
  }
}

  const mapStateToProps = (state) => ({
  guesthouses: state.guesthouses
})

const mapDispatchToProps = {
  setLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
