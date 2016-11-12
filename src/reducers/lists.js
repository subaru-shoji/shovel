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
  const readList = R.intersectionWith(R.eqBy(R.prop('ncode')), action.payload, state.db);
  const merged = action.payload.map((el) => {
    const data = (readList.find((elm) => el.ncode === elm.ncode) || {});
    return R.merge(el, data);
  });
  return {
    narou: [...state.narou, ...action.payload],
    merged: [...state.narou, ...merged]
  }
};

const readNovel = (state, action) => {
  const index = state.merged.findIndex((el) => el.ncode === action.payload.ncode);
  return {
    db: [...state.db, action.payload],
    merged: [
      ...state.merged.slice(0, index-1),
      R.merge(state.merged[index], action.payload),
      ...state.merged.slice(index+1)
    ]
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
    case 'READ_NOVEL': {
      readNovel(state, action);
    }
    default:
      return {};
  }
}

export default (state = initialState, action) => {
  return R.merge(state, createState(state, action))
};
