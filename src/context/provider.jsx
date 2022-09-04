import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

function Provider({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [offset, setOffset] = useState(0);

  const contextValue = useMemo(() => ({
    inputValue,
    setInputValue,
    search,
    setSearch,
    data,
    setData,
    totalHits,
    setTotalHits,
    offset,
    setOffset,
  }), [inputValue, search, data, totalHits, offset]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
