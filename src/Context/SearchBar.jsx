import React from 'react';
import { CartState } from './Context';

const SearchBar = () => {
  const { productDispatch } = CartState();

  return (
    <input
      type="text"
      placeholder="Search for food..."
      onChange={(e) =>
        productDispatch({
          type: 'FILTER_BY_SEARCH',
          payload: e.target.value,
        })
      }
    />
  );
};

export default SearchBar;
