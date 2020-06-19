export const INITIAL_STATE = {
  count:0,
  action: []
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'COUNT_ELEMENT':
      return {action:[...state.action, action]};
    default:
      return state;
  }
}

export default reducer;