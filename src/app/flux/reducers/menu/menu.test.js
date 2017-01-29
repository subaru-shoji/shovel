import { expect } from 'chai';

import update from './menu';

it('return valid state', () => {
  const initialState = {
    opened: false,
  };

  const openMenuAction = {
    type: 'OPEN_MENU'
  };
  expect(update(initialState, openMenuAction)).to.eql({
    opened: true,
  });

  const closeMenuAction = {
    type: 'CLOSE_MENU'
  };
  expect(update(initialState, closeMenuAction)).to.eql({
    opened: false,
  });
});
