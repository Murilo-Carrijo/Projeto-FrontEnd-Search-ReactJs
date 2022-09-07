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

function Search() {
  const {
    inputValue, setInputValue, setSearch, search, setData, updateLs,
  } = useContext(AppContext);
  const { actualPage, setActualPage } = Pagination();

  useEffect(() => {
    fetchApi(actualPage, search, setData);
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
      <div className="pagination-container">
        {search && Array(10).fill('').map((_, index) => (
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

export default Search;
