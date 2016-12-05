import { expect } from 'chai';

import update from './isMenuOpen';

it('return valid state', () => {
  const openMenuAction = {
    type: 'OPEN_MENU'
  };

  expect(update(openMenuAction)).toEqual(true);
  
  const closeMenuAction = {
    type: 'CLOSE_MENU'
  };
  expect(update(closeMenuAction)).toEqual(false);
});
