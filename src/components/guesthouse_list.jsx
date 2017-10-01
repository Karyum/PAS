import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GuesthouseList = ({ guesthouses }) => {
  const renderList = AllGuesthouse => AllGuesthouse.map((guesthouse, i) =>
    <div key={i} className="w-third dib">
      <Link
        to={{ pathname: `place/${guesthouse.title}` }}
        className="link black f2-l f3 ba br3 pa2 hover-bg-light-blue bg-animate"
        key={guesthouse.title}
      >
        {guesthouse.title}
      </Link>
    </div>
  );


  return (
    <div className="w-100 tc mt4">
      {renderList(guesthouses)}
    </div>
  );
};

GuesthouseList.propTypes = {
  guesthouses: PropTypes.array
};

export default GuesthouseList;
