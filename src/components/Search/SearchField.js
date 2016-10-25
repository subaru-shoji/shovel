import React from 'react';

import TextField from 'material-ui/TextField';

import {whiteFont} from '../../styles/style.js';

export default function SearchField (){
  return (
    <TextField
      name='word'
      hintText='Search...'
      inputStyle={whiteFont}
    />
  );
};
