import { types } from './actions';

const initialState = {
  visibilityLoader: false,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_VISIBILITY_LOADER:
      return {
        ...state,
        visibilityLoader: action.payload.visibility,
      };

    default:
      return state;
  }
}
