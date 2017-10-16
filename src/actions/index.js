import Axios from 'axios';
import { CHOSE_GUESTHOUSE, FOUND_LOCATION, FOUND_DIRECTIONS } from '../constants/action_types';

export const setGuesthouse = guesthouse => ({
  type: CHOSE_GUESTHOUSE,
  guesthouse: {
    title: guesthouse.title,
    address: guesthouse.address,
    latitude: guesthouse.latitude,
    longtitude: guesthouse.longtitude
  }
});


export const setMethod = method => ({
  type: method,
  method
});

export const setLocation = position => ({
  type: FOUND_LOCATION,
  latitude: position.latitude,
  longtitude: position.longitude
});

export const setDirections = directions => ({
  type: FOUND_DIRECTIONS,
  directions
});

export const getPlaces = () => {
  const request = Axios.get('/get-places');

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: 'FETCH_PLACES', payload: data });
    });
  };
};
