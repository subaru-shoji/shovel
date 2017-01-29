const initialState = {
  opened: false
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MENU': {
      return Object.assign({}, state, {
        opened: true
      });
    }
    case 'CLOSE_MENU': {
      return Object.assign({}, state, {
        opened: false
      });
    }
    default: {
      return state;
    }
  }
}
