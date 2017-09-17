import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { setMethod } from '../actions/index.js';
import MapView from '../components/map.jsx';
import { CAR_METHOD, BUS_METHOD, TAXI_METHOD } from '../constants/action_types.js';

class Directions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      directions: []
    }
  }

  componentWillMount() {
    const { path } = this.props.match
    this.props.setMethod(this.findMethod(path));
      if (this.props.coords.usersLat && this.props.current.latitude) {
      Axios.post('/get-steps', {
        user: this.props.coords,
        place: this.props.current
      })
      .then(res => this.setState({ directions: res.data.geometry.coordinates }))
      .catch(err => err)
    } else {
      return
    }
  }

   findMethod(method) {
    switch (method) {
      case '/car':
        return CAR_METHOD
        break;
      case '/bus':
        return BUS_METHOD
        break;
      case '/taxi':
        return TAXI_METHOD
      default:
        return method
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Walk there</h2>
        <MapView coords={this.props.coords} direction={this.state.directions} />
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    current: state.current,
    coords: state.usersLocation
  }
}

const mapDispatchToProps = {
  setMethod
}



export default connect(mapStateToProps, mapDispatchToProps)(Directions);
