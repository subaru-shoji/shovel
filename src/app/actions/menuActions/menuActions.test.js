import { expect } from 'chai';

import { openMenu, closeMenu } from './menuActions';

it('return valid action', () => {
  expect(openMenu()).toEqual({
    type: 'OPEN_MENU',
    payload: true
  });
  expect(closeMenu()).toEqual({
    type: 'CLOSE_MENU',
    payload: true
  });
});
