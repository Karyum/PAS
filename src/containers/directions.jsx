import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { setMethod } from '../actions/index.js';
import Map from '../components/map.jsx';
import { CAR_METHOD, BUS_METHOD, TAXI_METHOD } from '../constants/action_types.js';

class Directions extends Component {
  constructor(props) {
    super(props)

    this.state = {latlng: {}}
  }

  componentWillMount() {
    const { path } = this.props.match
    this.props.setMethod(this.findMethod(path));

    Axios.post('/geocode', {
      address: this.props.current.address
    })
    .then(res => this.setState({ latlng: res.data }))
    .catch( err => err )

    navigator.geolocation.getCurrentPosition((postion) => {
      return this.setState({ coords: postion.coords })
    })
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
    return (
      <div>
        <h2>{this.props.currentMethod}</h2>
        <Map coords={this.props.coords}/>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  console.log('STATE', state);
  return {
    current: state.current,
    currentMethod: state.currentMethod,
    coords: state.usersLocation
  }
}

const mapDispatchToProps = {
  setMethod
}



export default connect(mapStateToProps, mapDispatchToProps)(Directions);
