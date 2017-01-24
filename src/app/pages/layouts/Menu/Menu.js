import React from 'react';
import { connect } from 'react-redux';

import MenuDetail from './MenuDetail'

import { closeMenu, showMenuDocked, showMenuUndocked } from '../../actions/menuActions';


class Menu extends React.Component {
  handleChange () {
    this.props.closeMenu();
  }
  render () {
    return (
      <div>
        <MenuDetail
          menuState={this.props.menu}
          handleChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    menu: state.menu,
  }),
  { closeMenu, showMenuDocked, showMenuUndocked }
)(Menu);
