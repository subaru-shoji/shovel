import React from 'react';
import { connect } from 'react-redux';

import MenuDetail from './MenuDetail'

import { closeMenu } from '../../actions/menuActions';


class Menu extends React.Component {
  handleChange () {
    this.props.closeMenu();
  }
  render () {
    return (
      <MenuDetail
        isMenuOpen={this.props.menu.opened}
        handleChange={this.handleChange.bind(this)}
      />
    )
  }
}

export default connect(
  (state) => ({
    menu: state.menu,
  }),
  { closeMenu }
)(Menu);
