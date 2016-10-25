import React from 'react';

import AppBar from 'material-ui/AppBar';

import SearchField from './SearchField'
import SearchButton from './SearchButton'
import SelectOrder from './SelectOrder'


import commonPadding from '../../styles/style.js';

export default function SearchForm({searchMethod, refName}) {
  return (
    <form ref={refName}>
      <AppBar
        title={(<SearchField/>)}
        iconElementRight={(<SearchButton searchMethod={searchMethod}/>)}
      />
      <div style={commonPadding}>
        <SelectOrder/>
      </div>
    </form>
  );
};
