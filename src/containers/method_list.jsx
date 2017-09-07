import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setGuesthouse } from '../actions/index.js';

import { CAR_METHOD, BUS_METHOD, TAXI_METHOD } from '../constants/action_types.js';

class MethodList extends Component {
  componentWillMount() {
    const { guesthouse } = this.props.match.params;
    const filteredGhouse = this.props.guesthouses.filter((ghouse) => ghouse.title == guesthouse)
    this.props.setGuesthouse(filteredGhouse[0]);
  }
  render() {
    return (
      <div>
        <Link to='/car' className="mh2">Car method</Link>
        <Link to='/bus' className="mh2">Bus method</Link>
        <Link to='/taxi' className="mh2">Taxi method</Link>

        Current guesthouse: { this.props.guesthouse.title }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  guesthouses: state.guesthouses,
  guesthouse: state.current
});

const mapDispatchToProps = {
  setGuesthouse
}

export default connect(mapStateToProps, mapDispatchToProps)(MethodList);
