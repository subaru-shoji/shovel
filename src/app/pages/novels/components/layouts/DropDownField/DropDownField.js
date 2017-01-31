import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import { grey400, transparent } from 'material-ui/styles/colors';


export default class DropDownField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue ? props.defaultValue : Object.keys(this.props.hashMap)[0]
    };
  }
  handleChange(event, index, value) {
    this.setState({
      value: value
    });
  }
  render() {
    const labelStyle = {
      fontSize: 12
    };

    const iconStyle = {
      fill: grey400
    };

    const underlineStyle = {
      borderColor: transparent
    };


    const hashMap = this.props.hashMap;
    const menus = Object.keys(hashMap).map((key) => {
      return (
        <MenuItem key={key} value={key} primaryText={hashMap[key]}/>
        );
    })

    return (
      <span>
        <input type='hidden' name={this.props.name} value={this.state.value}/>
        <DropDownMenu
      autoWidth={true}
      value={this.state.value}
      onChange={this.handleChange.bind(this)}
      {...{
        iconStyle,
        underlineStyle,
        labelStyle
      }}
      >
          {menus}
        </DropDownMenu>
      </span>
      );
  }
}
