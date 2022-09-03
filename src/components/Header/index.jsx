import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import './Header.css';
import { Button } from 'reactstrap';
import { IoIosStar, IoIosSearch } from 'react-icons/io';

function Header() {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  function renderPageTitle() {
    if (pathname === '/search' || pathname === '/') {
      return (
        <div className="header-container">
          <h1 className="header-title">Realize sua Busca</h1>
          <Button
            className="favorites-button"
            outline
            onClick={() => history.push('/favorites')}
          >
            Favoritos
            {' '}
            <IoIosStar className="favorites-star" />
          </Button>
        </div>
      );
    }
    if (pathname === '/favorites') {
      return (
        <div className="header-container">
          <h1 className="header-title">Artigos Favoritados</h1>
          <Button
            className="favorites-button"
            outline
            onClick={() => history.push('/search')}
          >
            Realizar Buscas
            <IoIosSearch className="favorites-search" />
          </Button>
        </div>
      );
    }
    return <h1 className="not-found">Pagina Não Encontrada</h1>;
  }

  return (
    renderPageTitle()
  );
}

export default Header;
