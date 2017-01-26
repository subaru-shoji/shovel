import { expect } from 'chai';

import { openMenu, closeMenu } from './menuActions';

it('return valid action', () => {
  expect(openMenu()).to.eql({
    type: 'OPEN_MENU'
  });
  expect(closeMenu()).to.eql({
    type: 'CLOSE_MENU'
  });
});
