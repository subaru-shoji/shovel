import { expect } from 'chai';
import { List } from 'immutable';

import update from './readList';

it('return valid state', () => {
  const initialState = List();

  const novel = {
    ncode: 'N0001',
    writer: 'test'
  };

  const updateAction = {
    type: 'READ_LIST.UPDATE',
    payload: List([novel])
  };

  expect(update(initialState, updateAction)).to.eql(List([novel]));
});
