import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

function Provider({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const contextValue = useMemo(() => ({
    inputValue,
    setInputValue,
    search,
    setSearch,
    data,
    setData,
  }), [inputValue, search, data]);

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
