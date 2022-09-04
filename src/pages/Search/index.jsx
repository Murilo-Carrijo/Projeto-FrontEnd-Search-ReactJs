import React, { useContext } from 'react';
import {
  InputGroup, InputGroupText, Input, Button,
} from 'reactstrap';
import { IoIosSearch } from 'react-icons/io';
import Header from '../../components/Header';
import AppContext from '../../context/appContext';
import './Search.css';

function Search() {
  const { setInputValue } = useContext(AppContext);
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
        >
          Buscar
          <IoIosSearch className="button-icon" />
        </Button>
      </div>
    </div>
  );
}

export default Search;
