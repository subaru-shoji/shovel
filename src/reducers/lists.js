import R from 'ramda';

const initialState = {
  narou: [],
  db: [],
  merged: []
};


const syncMergedData = (narou, db) => {
  return narou.map((novel) => {
    const dbRow = db.find((el) => el.ncode === novel.ncode) || {};
    return R.merge(novel, dbRow)
  });
};

export default (state = initialState, action) => {
  const _state = R.merge(state, (() => {
    switch(action.type) {
      case 'UPDATE_NAROU_LIST': {
        return {
          narou: action.narou,
        };
      }
      case 'READ_NOVEL': {
        return {
          db: [...state.db, action.novel],
        };
      }
      default:
        return {};
    }
  })());


  return R.merge(_state, {merged: syncMergedData(_state.narou, _state.db)});
};
