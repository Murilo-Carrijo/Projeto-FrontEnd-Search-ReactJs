import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import Pagination from '../../components/Pagination';
import './Favorites.css';
import '../Search/Search.css';

function Favorites() {
  const [ls, setLs] = useState([]);
  const { actualPage, setActualPage } = Pagination();

  useEffect(() => {
    setLs(JSON.parse(localStorage.getItem('favorites')));
  }, [setLs]);

  const pages = Math.ceil(ls.length / 10);
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
