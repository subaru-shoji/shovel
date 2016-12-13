import R from 'ramda';

const initialState = {
  narou: [],
  db: [],
  merged: []
};

const initializeNarouList = () => {
  return {
    narou: [],
    merged: []
  };
};

const addNarouList = (state, action) => {
  // fetch ncode list.
  const ncodeList = R.intersectionWith(R.eqBy(R.prop('ncode')), action.payload, state.db)
                      .map((el)=>el.ncode);

  // fetch db object.
  const readList = R.filter((n) => ncodeList.includes(n.ncode), state.db);
  const merged = action.payload.map((el) => {
    const data = (readList.find((elm) => el.ncode === elm.ncode) || {});
    return R.merge(el, data);
  });

  return {
    narou: [...state.narou, ...action.payload],
    merged: [...state.merged, ...merged]
  }
};

const initializeDbListWith = (state, action) => {
  return {
    narou: [],
    db: action.payload,
    merged: []
  };
};

const readNovel = (state, action) => {
  const index = state.merged.findIndex((el) => el.ncode === action.payload.ncode);
  let merged = [...state.merged];
  merged[index] = R.merge(state.merged[index], action.payload);

  return {
    db: [...state.db, action.payload],
    merged: merged
  }
};


const createState = (state, action) => {
  switch(action.type) {
    case 'INITIALIZE_NAROU_LIST': {
      return initializeNarouList();
    }
    case 'ADD_NAROU_LIST': {
      return addNarouList(state, action);
    }
    case 'INITIALIZE_DB_LIST_WITH':
      return initializeDbListWith(state, action);
    case 'READ_NOVEL': {
      return readNovel(state, action);
    }
    default:
      return {};
  }
}

export default (state = initialState, action) => {
  return R.merge(state, createState(state, action))
};
