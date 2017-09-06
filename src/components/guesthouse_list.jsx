import React from 'react';
import { Link } from 'react-router-dom';

const GuesthouseList = ({ guesthouses }) => {
  const renderList = (guesthouses) => {
    return guesthouses.map((guesthouse) => {
      return <Link
        to={{pathname: 'place/' + guesthouse.title}}
        className="mh2"
        key={guesthouse.title}
      >
        {guesthouse.title}
      </Link>
    })
  }

  return (
    <div>
      {renderList(guesthouses)}
    </div>
  )
}

export default GuesthouseList;
