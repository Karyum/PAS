import React from 'react';
import { Link } from 'react-router-dom';

import { SHOW_FAVORITE, SHOW_UNFAVORITE, SHOW_ALL } from '../constants/action_types.js';

const Footer = ({ setFilter, match }) => {
  return (
    <div>
      <Link to='/' className="mh2" onClick={() => setFilter(SHOW_ALL)}>Show all</Link>
      <Link to='favorite' className="mh2" onClick={() => setFilter(SHOW_FAVORITE)}>Show favorite</Link>
      <Link to='unfavorite' className="mh2" onClick={() => setFilter(SHOW_UNFAVORITE)}>Show unfavorite</Link>
      <Link to='heyo'>Pfft</Link>
    </div>
  )
}

export default Footer;
