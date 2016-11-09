import React from 'react';

import TextField from 'material-ui/TextField';
import { cyan400, transparent  } from 'material-ui/styles/colors';

import {whiteFont} from '../../styles/style.js';

export default class SearchField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isFocused: false};
  }
  handleFocus(){
    this.setState({isFocused: true});
  }
  handleBlur(){
    this.setState({isFocused: false});
  }
  render(){
    const backgroundColor = this.state.isFocused ? cyan400 : transparent ;
    const inputStyle = Object.assign({backgroundColor: backgroundColor}, whiteFont);

    const hintStyle = Object.assign({bottom: 8}, whiteFont);

    return (
      <TextField
        name='word'
        hintText='Search'
        hintStyle={hintStyle}
        inputStyle={inputStyle}
        fullWidth={true}
        style={{height: 35}}
        underlineStyle={{bottom: 0}}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
      />
    );
  }
};
