import React from 'react';
import { connect } from 'react-redux';

import MenuDetail from '../components/Menu/MenuDetail'

import { closeMenu } from '../../redux/actions/action';


class Menu extends React.Component {
  handleChange () {
    this.props.closeMenu();
  }
  render () {
    return (
      <MenuDetail
        isMenuOpen={this.props.isMenuOpen}
        handleChange={this.handleChange.bind(this)}
      />
    )
  }
}

export default connect(
  (state) => ({
    isMenuOpen: state.isMenuOpen,
  }),
  { closeMenu }
)(Menu);
