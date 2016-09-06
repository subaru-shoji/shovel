const initialState = {
  novels: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_NOVEL_LIST': {
      return { novels: action.novels }
    }
    default:
      return state
  }
}