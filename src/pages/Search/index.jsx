import React, { useContext, useEffect } from 'react';
import {
  InputGroup, InputGroupText, Input, Button,
} from 'reactstrap';
import { IoIosSearch } from 'react-icons/io';
import Header from '../../components/Header';
import Card from '../../components/Cards';
import Pagination from '../../components/Pagination';
import fetchApi from '../../utils/fetchApi';
import AppContext from '../../context/appContext';
import './Search.css';

// const MAX_ITEMS = 9;
// const MAX_LEFT = (MAX_ITEMS - 1) / 2;

function Search() {
  const {
    inputValue, setInputValue, setSearch, search, setData, updateLs, setTotalHits,
  } = useContext(AppContext);
  const { actualPage, renderPagination } = Pagination();
  // const firstItem = Math.max(actualPage - MAX_LEFT, 1);

  useEffect(() => {
    fetchApi(actualPage, search, setData, setTotalHits);
  }, [setData, search, actualPage, updateLs]);

  return (
    <div className="search-container">
      <Header />
      <div className="input-container">
        <InputGroup
          className="input-test"
          size="lg"
        >
          <InputGroupText>
            <IoIosSearch />
          </InputGroupText>
          <Input
            placeholder="Digite sua busca"
            onChange={({ target }) => setInputValue(target.value)}
          />
        </InputGroup>
        <Button
          type="button"
          className="button-search"
          onClick={() => setSearch(inputValue)}
        >
          Buscar
          <IoIosSearch className="button-icon" />
        </Button>
      </div>
      <div className="cards-container">
        <Card />
      </div>
      {/* <div className="pagination-container">
        {search && Array.from({ length: Math.min(MAX_ITEMS, (totalHits / 10)) }).fill('')
          .map((_, index) => index + firstItem)
          .map((page) => (
            <button
              type="button"
              key={page}
              onClick={() => setActualPage(page)}
              className={page === actualPage ? 'button-pagination--active' : 'button-pagination'}
            >
              { page }
            </button>
          ))}
      </div> */}
      { renderPagination() }
    </div>
  );
}

export default Search;
