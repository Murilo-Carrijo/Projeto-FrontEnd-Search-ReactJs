import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Card, CardHeader, CardBody, CardTitle, CardText, CardFooter,
} from 'reactstrap';
import { IoIosStar } from 'react-icons/io';
import managingLs from '../../utils/managingLs';
import renderFavoriteStar from '../../utils/renderFavoriteStar';
import AppContext from '../../context/appContext';

import './Cards.css';

function Cards() {
  const { data, setUpdateLs, ls } = useContext(AppContext);

  const location = useLocation();
  const { pathname } = location;

  function renderPageCards() {
    if (pathname === '/search' || pathname === '/') {
      return (
        <div className="container">
          { data
        && data.map((d) => (
          <div
            className="card-container"
            // eslint-disable-next-line no-underscore-dangle
            key={d._id}
          >
            <Card
              className="my-2"
            >
              <CardHeader className="card-header">
                {
                // eslint-disable-next-line no-underscore-dangle
                  d._type
                }
                <button
                  type="button"
                  onClick={() => managingLs(d, setUpdateLs)}
                  className="favorite-button"
                >
                  {
                  // eslint-disable-next-line no-underscore-dangle
                    renderFavoriteStar(d._id)
                  }
                </button>
              </CardHeader>
              <CardBody>
                <CardTitle tag="h5">
                  {
                    // eslint-disable-next-line no-underscore-dangle
                    d._source.title
                  }
                </CardTitle>
                <CardText>
                  {
                    // eslint-disable-next-line no-underscore-dangle
                    d._source.description
                  }
                </CardText>
                <div>
                  <p>Texto Completo:</p>
                  <a
                    href={// eslint-disable-next-line no-underscore-dangle
                      d._source.fullTextIdentifier
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {
                    // eslint-disable-next-line no-underscore-dangle
                      d._source.fullTextIdentifier
                    }
                  </a>
                </div>
              </CardBody>
              <CardFooter className="footer-card">
                <p>Autores: </p>
                {
                  // eslint-disable-next-line no-underscore-dangle
                  d._source.authors.map((a) => (
                    <div
                      key={a}
                      className="footer-author"
                    >
                      <p>{`${a} `}</p>
                    </div>
                  ))
                }
              </CardFooter>
            </Card>
          </div>
        )) }
        </div>
      );
    }
    if (pathname === '/favorites') {
      return (
        <div className="container">
          { ls
        && ls.map((d) => (
          <div
            className="card-container"
            // eslint-disable-next-line no-underscore-dangle
            key={d._id}
          >
            <Card
              className="my-2"
            >
              <CardHeader className="card-header">
                {
                // eslint-disable-next-line no-underscore-dangle
                  d._type
                }
                <button
                  type="button"
                  onClick={() => managingLs(d, setUpdateLs)}
                  className="favorite-button"
                >
                  <IoIosStar className="card-header-start" />
                </button>
              </CardHeader>
              <CardBody>
                <CardTitle tag="h5">
                  {
                    // eslint-disable-next-line no-underscore-dangle
                    d._source.title
                  }
                </CardTitle>
                <CardText>
                  {
                    // eslint-disable-next-line no-underscore-dangle
                    d._source.description
                  }
                </CardText>
                <div>
                  <p>Texto Completo:</p>
                  <a
                    href={// eslint-disable-next-line no-underscore-dangle
                      d._source.fullTextIdentifier
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {
                    // eslint-disable-next-line no-underscore-dangle
                      d._source.fullTextIdentifier
                    }
                  </a>
                </div>
              </CardBody>
              <CardFooter className="footer-card">
                <p>Autores: </p>
                {
                  // eslint-disable-next-line no-underscore-dangle
                  d._source.authors.map((a) => (
                    <div
                      key={a}
                      className="footer-author"
                    >
                      <p>{`${a} `}</p>
                    </div>
                  ))
                }
              </CardFooter>
            </Card>
          </div>
        )) }
        </div>
      );
    }
    return <h1 className="not-found">Pagina Não Encontrada</h1>;
  }

  return (
    renderPageCards()
  );
}

export default Cards;
