import React from 'react';
import { IoIosStar } from 'react-icons/io';

function renderFavoriteStar(id) {
  const checkLs = JSON.parse(localStorage.getItem('favorites'));
  // eslint-disable-next-line no-underscore-dangle
  const idsLs = checkLs?.map((items) => items._id);
  if (idsLs?.includes(id)) {
    return (
      <IoIosStar className="card-header-start" />
    );
  }
  return <IoIosStar />;
}

export default renderFavoriteStar;
