import React from 'react';

import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

export default function SearchButton ({searchMethod}){
  return (
    <IconButton onClick={searchMethod} tooltip='Search'>
      <ActionSearch />
    </IconButton>
  )
};