import React from 'react';
import { Link } from 'react-router-dom';

const GuesthouseList = ({ guesthouses }) => {
  const renderList = (guesthouses) => {
    return guesthouses.map((guesthouse) => {
      return (
      <div className="w-third dib">
      <Link
        to={{pathname: 'place/' + guesthouse.title}}
        className="link blue f2-l f3 ba br3 pa2 "
        key={guesthouse.title}
      >
        {guesthouse.title}
      </Link>
    </div>
    )
    })
  }

  return (
    <div className="w-100 tc mt4">
      {renderList(guesthouses)}
    </div>
  )
}

export default GuesthouseList;
