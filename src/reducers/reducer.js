const initialState = {
  novels: [],
  searchParams: {},
  currentPage: 1
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_NOVEL_LIST': {
      return mergeState(state, { novels: action.novels });
    }
    case 'UPDATE_SEARCH_PARAMS': {
      return mergeState(state, { searchParams: action.params });
    }
    case 'UPDATE_CURRENT_PAGE': {
      return mergeState(state, { currentPage: action.page });
    }
    default:
      return state
  }
}

function mergeState(oldState, newState) {
  return Object.assign({}, oldState, newState);
}