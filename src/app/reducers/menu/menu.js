const initialState = {
  opened: false,
  docked: false
};

export default function update(state = initialState, action) {
  switch(action.type) {
    case 'OPEN_MENU': {
      return Object.assign({}, state, {opened: true});
    }
    case 'CLOSE_MENU': {
      return Object.assign({}, state, {opened: false});
    }
    case 'SHOW_MENU_DOCKED': {
      return Object.assign({}, state, {docked: true});
    }
    case 'SHOW_MENU_UNDOCKED': {
      return Object.assign({}, state, {docked: false});
    }
    default:
      return state;
  }
}