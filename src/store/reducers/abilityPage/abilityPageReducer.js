import { types } from './actions';

const initialState = {
  abilityDetailData: {},
};

export function abilityPageReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ABILITY_DETAIL_DATA:
      return {
        ...state,
        abilityDetailData: action.payload.data,
      };
    default:
      return state;
  }
}
