import React from 'react';

import {whiteFont} from '../styles/style.js';

export default function SearchField (){
  return (
    <TextField
      name='word'
      hintText='Search...'
      inputStyle={whiteFont}
    />
  );
};
