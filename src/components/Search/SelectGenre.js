import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { GENRE_LIST } from '../../constants/constant';

export default class SelectOrder extends React.Component {
  constructor(){
    super();

    this.state = {
      order: Object.keys(GENRE_LIST)[0]
    };
  }
  handleChange(event, index, value){
    this.setState({order: value});
  }
  render(){
    return (
      <span>
        <SelectField value={this.state.order} onChange={this.handleChange.bind(this)}>
          {Object.keys(GENRE_LIST).map((key)=> (<MenuItem key={key} value={key} primaryText={GENRE_LIST[key]} />))}
        </SelectField>
        <input name="genre" type="hidden" value={this.state.order} />
      </span>
    );
  }
}