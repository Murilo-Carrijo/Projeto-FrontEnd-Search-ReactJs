import React from 'react';
import {
  InputGroup, InputGroupText, Input, Button,
} from 'reactstrap';
import { IoIosSearch } from 'react-icons/io';
import Header from '../../components/Header';

function Search() {
  return (
    <div>
      <Header />
      <div className="container-input">
        <InputGroup size="lg">
          <InputGroupText>
            <IoIosSearch />
          </InputGroupText>
          <Input
            placeholder="Digite sua busca"
            // onChange={(e) => setInputValue(e.target.value)}
          />
        </InputGroup>
        <Button
          type="button"
          className="button-search"
          // onClick={() => setSearch(inputValue)}
        >
          buscar
        </Button>
      </div>
    </div>
  );
}

export default Search;
