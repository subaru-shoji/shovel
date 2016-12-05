import { expect } from 'chai';

import update from './isMenuOpen';

it('return valid state', () => {
  const initialState =  false;
  const openMenuAction = {
    type: 'OPEN_MENU'
  };

  expect(update(initialState, openMenuAction)).to.eql(true);

  const closeMenuAction = {
    type: 'CLOSE_MENU'
  };
  expect(update(initialState, closeMenuAction)).to.eql(false);
});
