import React from 'react';

import SearchField from './SearchField'
import SearchButton from './SearchButton'

import commonPadding from '../styles/style.js';

export default function SearchForm({searchMethod}) {
  return (
    <form>
      <AppBar
        title={(<SearchField/>)}
        iconElementRight={(<SearchButton/>)}
      />
      <div style={commonPadding}>
        <SelectOrder searchMethod={searchMethod} />
      </div>
    </form>
  );
};
