import R from 'ramda';

const initialState = []

const createState = (state, action) => {
  switch(action.type) {
    case 'INITIALIZE_READ_LIST_WITH':
      return action.payload
    case 'PUSH_DATA': {
      return state.concat(action.payload);
    }
    default:
      return [];
  }
}

export default (state = initialState, action) => {
  return R.merge(state, createState(state, action))
};
