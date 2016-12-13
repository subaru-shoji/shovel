import { expect } from 'chai';

import update from './menu';

it('return valid state', () => {
  const initialState = {
    opened: false,
    docked: false
  };

  const openMenuAction = {
    type: 'OPEN_MENU'
  };
  expect(update(initialState, openMenuAction)).to.eql( {
    opened: true,
    docked: false
  });

  const closeMenuAction = {
    type: 'CLOSE_MENU'
  };
  expect(update(initialState, closeMenuAction)).to.eql({
    opened: false,
    docked: false
  });

  const showMenuDockedAction = {
    type: 'SHOW_MENU_DOCKED'
  };
  expect(update(initialState, showMenuDockedAction)).to.eql( {
    opened: false,
    docked: true
  });

  const showMenuUndockedAction = {
    type: 'SHOW_MENU_UNDOCKED'
  };
  expect(update(initialState, showMenuUndockedAction)).to.eql({
    opened: false,
    docked: false
  });
});
