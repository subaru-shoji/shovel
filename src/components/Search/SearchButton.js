import React from 'react';

import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

export default function SearchButton ({handleSearch}){
  return (
    <IconButton onClick={handleSearch} tooltip='Search'>
      <ActionSearch />
    </IconButton>
  )
};