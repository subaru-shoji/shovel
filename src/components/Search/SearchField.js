import React from 'react';

import TextField from 'material-ui/TextField';
import { cyan400 } from 'material-ui/styles/colors';


import {whiteFont} from '../../styles/style.js';

export default function SearchField (){
  const inputStyle = Object.assign({}, whiteFont, {backgroundColor: cyan400});

  return (
    <TextField
      name='word'
      hintText='Search...'
      hintStyle={whiteFont}
      inputStyle={inputStyle}
      fullWidth={true}
      underlineShow={true}
      style={{height: 35}}
      underlineStyle={{bottom: 0}}
    />
  );
};
