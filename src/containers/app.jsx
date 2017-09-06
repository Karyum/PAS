import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuesthouseList from '../components/guesthouse_list.jsx';
import { setGuesthouse } from '../actions/index.js';

const App = ({ guesthouses, reducer }) => {
    return (
        <GuesthouseList guesthouses={guesthouses} reducer={reducer} />
    )
}

  const mapStateToProps = (state) => ({
  guesthouses: state.guesthouses
})

const mapDispatchToProps = (dispatch) => ({
  reducer: (guesthouse) =>  dispatch(setGuesthouse(guesthouse))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
