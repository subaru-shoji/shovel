import { expect } from 'chai';

import {
  commitRecord,
  initializeReadListWith
} from './readListActions';

it('return valid action', () => {
  const novel = {
    ncode: 'n00001',
    write: 'test'
  };

  expect(commitRecord(novel)).to.eql({
    type: 'COMMIT_RECORD',
    payload: novel
  })


  const narouList = [
    novel
  ];

  expect(initializeReadListWith(narouList)).to.eql({
    type: 'INITIALIZE_READ_LIST_WITH',
    payload: narouList
  });
});


