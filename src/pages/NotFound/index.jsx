import React from 'react';
import './NotFound.css';

import { VscError } from 'react-icons/vsc';

function NotFound() {
  return (
    <h1 className="notfound">
      <VscError />
      {' '}
      Pagina não encontrada
    </h1>
  );
}

export default NotFound;
