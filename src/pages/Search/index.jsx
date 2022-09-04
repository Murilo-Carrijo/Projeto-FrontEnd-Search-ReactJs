import React, { useContext, useEffect } from 'react';
import {
  InputGroup, InputGroupText, Input, Button,
} from 'reactstrap';
import { IoIosSearch } from 'react-icons/io';
import Header from '../../components/Header';
import Card from '../../components/Cards';
import AppContext from '../../context/appContext';
import './Search.css';

function Search() {
  const {
    inputValue, setInputValue, setSearch, search, setData,
  } = useContext(AppContext);

  const fetchApi = async () => {
    const url = `https://core.ac.uk/api-v2/search/${search}?apiKey=pblsZQN9WajuB3YzSVXyJG8HIfOMoUFt`;
    try {
      const response = await fetch(url);
      const info = await response.json();
      setData(info.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [setData, search]);

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
    </div>
  );
}

export default Search;
