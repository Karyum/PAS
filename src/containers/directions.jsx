import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import ReactMapboxGl from 'react-mapbox-gl';

import { setMethod } from '../actions/index.js';
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
    }).then(res => {
       console.log(res.data);
       this.setState({ latlng: res.data })
    }).catch(err => {
      console.log(err);
      return err
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
        <h1>{this.props.current.title}</h1>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    current: state.current,
    currentMethod: state.currentMethod
  }
}

const mapDispatchToProps = {
  setMethod
}



export default connect(mapStateToProps, mapDispatchToProps)(Directions);
