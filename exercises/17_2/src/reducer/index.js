import { INITIAL_STATE } from "./sum";

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return {...state, count: state.count+1};
    default:
      return state;
  }
}

export default reducer;
