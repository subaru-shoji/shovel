import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import MenuView from './MenuView'

import * as menuActions from '../../../flux/actions/menuActions';


class Menu extends React.Component {
  handleChange () {
    this.props.menuActions.closeMenu();
  }
  render () {
    return (
      <div>
        <MenuView
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
  (dispatch) => ({ 
    menuActions: bindActionCreators(menuActions, dispatch) 
  })
)(Menu);
