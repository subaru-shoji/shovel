const initialState = {
  novels: [],
  searchParams: {},
  currentPage: 1
}

export default function reducer(state = initialState, action) {
  return mergeState(state, createState(state, action))
}

function createState(state, action) {
    switch(action.type) {
    case 'UPDATE_NOVEL_LIST': {
      return { novels: action.novels };
    }
    case 'UPDATE_SEARCH_PARAMS': {
      return { searchParams: action.params };
    }
    case 'UPDATE_CURRENT_PAGE': {
      return { currentPage: action.page };
    }
    default:
      return {}
  }
}

function mergeState(oldState, newState) {
  return Object.assign({}, oldState, newState);
}