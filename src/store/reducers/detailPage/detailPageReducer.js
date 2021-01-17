import { types } from './actions';

const initialState = {
  pokemonDetailData: {},
};

export function detailPageReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_POKEMON_DETAIL_DATA:
      return {
        ...state,
        pokemonDetailData: action.payload.data,
      };
    default:
      return state;
  }
}
