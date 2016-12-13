import { expect } from 'chai';

import { openMenu, closeMenu, showMenuDocked, showMenuUndocked } from './menuActions';

it('return valid action', () => {
  expect(openMenu()).to.eql({
    type: 'OPEN_MENU'
  });
  expect(closeMenu()).to.eql({
    type: 'CLOSE_MENU'
  });
  expect(showMenuDocked()).to.eql({
    type: 'SHOW_MENU_DOCKED'
  });
  expect(showMenuUndocked()).to.eql({
    type: 'SHOW_MENU_UNDOCKED'
  });
});
