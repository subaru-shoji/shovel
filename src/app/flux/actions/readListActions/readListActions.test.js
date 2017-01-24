import { expect } from 'chai';

import * as readListActions from './readListActions';

it('return valid action', () => {
  const novel = {
    ncode: 'n00001',
    write: 'test'
  };

  const narouList = [
    novel
  ];

  expect(readListActions.update(narouList)).to.eql({
    type: 'READ_LIST.UPDATE',
    payload: narouList
  });
});


