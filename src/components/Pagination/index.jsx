import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'query-string';

function Pagination() {
  const location = useLocation();
  const history = useHistory();

  const [actualPage, setActualPage] = useState(
    // eslint-disable-next-line no-use-before-define
    getActualPage() || 1,
  );

  function getActualPage() {
    const queryParams = qs.parse(location.search);
    const pages = queryParams.page;

    return pages ? Number(pages) : undefined;
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
  };
}

export default Pagination;
