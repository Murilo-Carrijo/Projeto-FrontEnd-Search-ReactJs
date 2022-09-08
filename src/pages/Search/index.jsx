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
    inputValue, setInputValue, setSearch, search, setData, updateLs, setTotalHits,
  } = useContext(AppContext);
  const { actualPage, renderPagination } = Pagination();

  useEffect(() => {
    fetchApi(actualPage, search, setData, setTotalHits);
  }, [search, actualPage, updateLs]);

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
      { renderPagination() }
    </div>
  );
}

export default Search;
