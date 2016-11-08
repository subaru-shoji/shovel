import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { ORDER_LIST } from '../../constants/constant';

export default class SelectOrder extends React.Component {
  constructor(){
    super();

    this.state = {
      order: Object.keys(ORDER_LIST)[0]
    };
  }
  handleChange(event, index, value){
    this.setState({order: value});
  }
  render(){
    return (
      <span>
        <SelectField value={this.state.order} onChange={this.handleChange.bind(this)} fullWidth={true}>
          {Object.keys(ORDER_LIST).map((key)=> (<MenuItem key={key} value={key} primaryText={ORDER_LIST[key]} />))}
        </SelectField>
        <input name="order" type="hidden" value={this.state.order} />
      </span>
    );
  }
}