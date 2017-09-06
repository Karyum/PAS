import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setMethod } from '../actions/index.js';
import { CAR_METHOD } from '../constants/action_types.js';

class Directions extends Component {
  componentWillMount() {
    this.props.setMethod(CAR_METHOD);
  }

  render() {
    return (
      <div>
        <h1>{this.props.current}</h1>
        <h2>{this.props.currentMethod}</h2>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    current: state.current.title,
    currentMethod: state.currentMethod
  }
}

const mapDispatchToProps = {
  setMethod
}



export default connect(mapStateToProps, mapDispatchToProps)(Directions);
