import React from 'react';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import './Favorites.css';

function Favorites() {
  return (
    <div>
      <Header />
      <div className="favorites-cards">
        <Cards />
      </div>
    </div>
  );
}

export default Favorites;
