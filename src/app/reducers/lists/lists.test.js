import { expect } from 'chai';

import update from './lists';

it('return valid state', () => {
  const initialState = {
    narou: [],
    db: [],
    merged: []
  };

  const initializeNarouListAction = {
    type: 'INITIALIZE_NAROU_LIST '
  };

  const novel = {
    ncode: 'N0001',
    writer: 'test'
  };


  expect(update(initialState, initializeNarouListAction)).to.eql({
    narou: [],
    db: [],
    merged: []
  });


  const addNarouListAction = {
    type: 'ADD_NAROU_LIST',
    payload: [novel]
  };

  expect(update(initialState, addNarouListAction)).to.eql({
    narou: [novel],
    db: [],
    merged: [novel]
  });

  const initializeDbListWithAction = {
    type: 'INITIALIZE_DB_LIST_WITH',
    payload: [novel]
  };

  expect(update(initialState, initializeDbListWithAction)).to.eql({
    narou: [],
    db: [novel],
    merged: []
  });


  const readData = {
      ncode: novel.ncode,
      isRead: true
  };
  const readNovelAction = {
    type: 'READ_NOVEL',
    payload: readData
  };

  const readNovelState = {
    narou: [novel],
    db: [],
    merged: [novel]
  };

  expect(update(readNovelState, readNovelAction)).to.eql({
    narou: [novel],
    db: [readData],
    merged: [Object.assign({}, novel, readData)]
  });
});
