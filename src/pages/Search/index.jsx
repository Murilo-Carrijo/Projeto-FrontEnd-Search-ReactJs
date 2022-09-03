import React, { useContext } from 'react';
import {
  InputGroup, InputGroupText, Input, Button,
} from 'reactstrap';
import { IoIosSearch } from 'react-icons/io';
import Header from '../../components/Header';
import './Search.css';
import AppContext from '../../context/appContext';

function Search() {
  const {
    inputValue,
    setInputValue,
    setSearch,
  } = useContext(AppContext);

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
            onChange={(e) => setInputValue(e.target.value)}
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
    </div>
  );
}

export default Search;
