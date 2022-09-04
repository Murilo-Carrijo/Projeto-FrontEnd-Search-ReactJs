import React, { useContext, useEffect } from 'react';
// import qs from 'qs';
import {
  InputGroup, InputGroupText, Input, Button,
} from 'reactstrap';
import { IoIosSearch } from 'react-icons/io';
import Header from '../../components/Header';
import Card from '../../components/Cards';
import Pagination from '../../components/Pagination';
import AppContext from '../../context/appContext';
import './Search.css';

function Search() {
  const {
    inputValue, setInputValue, setSearch, search, setData, setTotalHits,
  } = useContext(AppContext);
  const { actualPage, setActualPage } = Pagination();

  const fetchApi = async (page) => {
    const url = `https://core.ac.uk:443/api-v2/search/${search}?page=${page}&pageSize=10&apiKey=pblsZQN9WajuB3YzSVXyJG8HIfOMoUFt`;
    try {
      const response = await fetch(url);
      const info = await response.json();
      setData(info.data);
      setTotalHits(info.totalHits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi(actualPage);
  }, [setData, search, actualPage]);

  return (
    <div className="search-container">
      <Header />
      <div className="input-container">
        <InputGroup size="lg">
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
