import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import Pagination from '../../components/Pagination';
import getItemsLs from '../../utils/getItemsLs';
import AppContext from '../../context/appContext';
import './Favorites.css';
import '../Search/Search.css';

function Favorites() {
  const { setLs, updateLs } = useContext(AppContext);
  const { actualPage, renderPagination } = Pagination();

  useEffect(() => {
    getItemsLs(actualPage, setLs);
  }, [actualPage, updateLs]);

  return (
    <div>
      <Header />
      <div className="cards-container">
        <Cards />
      </div>
      { renderPagination() }
    </div>
  );
}

export default Favorites;
