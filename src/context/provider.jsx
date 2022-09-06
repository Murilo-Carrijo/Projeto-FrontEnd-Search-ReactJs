import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

function Provider({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [offset, setOffset] = useState(0);
  const [updateLs, setUpdateLs] = useState(false);
  const [ls, setLs] = useState([]);

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
    updateLs,
    setUpdateLs,
    ls,
    setLs,
  }), [inputValue, search, data, totalHits, offset, updateLs, ls]);

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
