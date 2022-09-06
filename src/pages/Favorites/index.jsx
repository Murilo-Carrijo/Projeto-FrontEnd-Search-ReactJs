import React, { useContext, useEffect } from 'react';
import { Button } from 'reactstrap';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import Pagination from '../../components/Pagination';
import './Favorites.css';
import '../Search/Search.css';
import AppContext from '../../context/appContext';

function Favorites() {
  const { setLs, updateLs } = useContext(AppContext);
  const { actualPage, setActualPage } = Pagination();

  function getItemsLs() {
    const itemsLs = JSON.parse(localStorage.getItem('favorites'));
    if (actualPage === 1) {
      const articles = itemsLs.filter((_, i) => i <= 9);
      return setLs(articles);
    }
    const min = (actualPage - 1 * 10);
    const max = min + 9;
    const articles = itemsLs.filter((_, i) => i >= min && i <= max);
    return setLs(articles);
  }

  useEffect(() => {
    getItemsLs();
  }, [actualPage, updateLs]);

  const pages = Math.ceil(JSON.parse(localStorage.getItem('favorites')).length / 10);
  return (
    <div>
      <Header />
      <div className="cards-container">
        <Cards />
      </div>
      <div className="pagination-container">
        {pages > 0 && Array(pages).fill('').map((_, index) => (
          <Button
            className="button-pagination"
            color="success"
            type="button"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => setActualPage(index + 1)}
            // eslint-disable-next-line react/no-unknown-property
            desabled={index === actualPage + 1}
          >
            { index + 1 }
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
