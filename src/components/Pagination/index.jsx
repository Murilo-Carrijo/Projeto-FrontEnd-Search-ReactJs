import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  AiFillFastBackward, AiFillBackward, AiFillFastForward, AiFillForward,
} from 'react-icons/ai';
import qs from 'query-string';
import AppContext from '../../context/appContext';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

function Pagination() {
  const { search, totalHits } = useContext(AppContext);

  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const [actualPage, setActualPage] = useState(
    // eslint-disable-next-line no-use-before-define
    getActualPage() || 1,
  );

  const firstItem = Math.max(actualPage - MAX_LEFT, 1);
  const pagesLs = Math.ceil(JSON.parse(localStorage.getItem('favorites')).length / 10);

  function getActualPage() {
    const queryParams = qs.parse(location.search);
    const pages = queryParams.page;

    return pages ? Number(pages) : undefined;
  }

  function renderPagination() {
    if (pathname === '/search' || pathname === '/') {
      return (
        search
        && (
        <div className="pagination-container">
          { actualPage !== 1
            && (
            <div className="initial-button-pagination">
              <button
                type="button"
                onClick={() => setActualPage(1)}
                className="return-button-pagination"
              >
                <AiFillFastBackward />
              </button>
              <button
                type="button"
                onClick={() => setActualPage(actualPage - 1)}
                className="return-button-pagination"
              >
                <AiFillBackward />
              </button>
            </div>
            )}
          {Array.from({ length: Math.min(MAX_ITEMS, Math.ceil(totalHits)) }).fill('')
            .map((_, index) => index + firstItem <= totalHits && index + firstItem)
            .map((page) => (
              page
              && (
                <button
                  type="button"
                  key={page}
                  onClick={() => setActualPage(page)}
                  className={page === actualPage ? 'button-pagination--active' : 'button-pagination'}
                >
                  { page }
                </button>
              )
            ))}
            { actualPage !== totalHits
            && (
            <div className="initial-button-pagination">
              <button
                type="button"
                onClick={() => setActualPage(actualPage + 1)}
                className="return-button-pagination"
              >
                <AiFillForward />
              </button>
              <button
                type="button"
                onClick={() => setActualPage(totalHits)}
                className="return-button-pagination"
              >
                <AiFillFastForward />
              </button>
            </div>
            )}
        </div>
        )
      );
    }
    if (pathname === '/favorites') {
      return (
        <div className="pagination-container">
          { actualPage !== 1
            && (
            <div className="initial-button-pagination">
              <button
                type="button"
                onClick={() => setActualPage(1)}
                className="return-button-pagination"
              >
                <AiFillFastBackward />
              </button>
              <button
                type="button"
                onClick={() => setActualPage(actualPage - 1)}
                className="return-button-pagination"
              >
                <AiFillBackward />
              </button>
            </div>
            )}
          {pagesLs && Array.from({ length: Math.min(MAX_ITEMS, pagesLs) }).fill('')
            .map((_, index) => index + firstItem)
            .map((page) => (
              <button
                type="button"
                key={page}
                onClick={() => setActualPage(page)}
                className={page === actualPage ? 'button-pagination--active' : 'button-pagination'}
              >
                { page }
              </button>
            ))}
          { actualPage !== pagesLs
            && (
            <div className="initial-button-pagination">
              <button
                type="button"
                onClick={() => setActualPage(actualPage + 1)}
                className="return-button-pagination"
              >
                <AiFillForward />
              </button>
              <button
                type="button"
                onClick={() => setActualPage(pagesLs)}
                className="return-button-pagination"
              >
                <AiFillFastForward />
              </button>
            </div>
            )}
        </div>
      );
    }
    return false;
  }

  useEffect(() => {
    const queryParams = qs.parse(location.search);
    history.push({
      search: qs.stringify({
        ...queryParams,
        page: actualPage,
      }),
    });
  }, [actualPage]);

  return {
    setActualPage,
    actualPage,
    renderPagination,
  };
}

export default Pagination;
