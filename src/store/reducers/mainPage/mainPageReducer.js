import { types } from './actions';

const initialState = {
  totalCount: 0,
  currentPage: 1,
  pokemonList: [],
};

export function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload.count,
      };
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.page,
      };
    case types.SET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.payload.list,
      };
    default:
      return state;
  }
}
