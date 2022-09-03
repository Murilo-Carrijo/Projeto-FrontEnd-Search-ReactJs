import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

function Provider({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [serach, setSearch] = useState('');

  const contextValue = useMemo(() => ({
    inputValue,
    setInputValue,
    serach,
    setSearch,
  }), [inputValue, serach]);

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
