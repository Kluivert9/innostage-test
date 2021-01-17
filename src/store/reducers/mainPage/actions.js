import PokemonService from '../../../services/PokemonService';
import { setVisibilityLoader } from '../app/actions';

export const types = {
  SET_TOTAL_COUNT: 'mainPage/SET_TOTAL_COUNT',
  SET_CURRENT_PAGE: 'mainPage/SET_CURRENT_PAGE',
  SET_POKEMON_LIST: 'mainPage/SET_POKEMON_LIST',
};

export function setTotalCount(count) {
  return {
    type: types.SET_TOTAL_COUNT,
    payload: { count },
  };
}

export function setCurrentPage(page) {
  return {
    type: types.SET_CURRENT_PAGE,
    payload: { page },
  };
}

export function setPokemonList(list) {
  return {
    type: types.SET_POKEMON_LIST,
    payload: { list },
  };
}

export const setPokemonData = (page) => async (dispatch) => {
  try {
    dispatch(setVisibilityLoader(true));
    const service = new PokemonService();
    const res = await service.getPokemonData(page);
    dispatch(setTotalCount(res.count));
    dispatch(setPokemonList(res.results));
    dispatch(setVisibilityLoader(false));
  } catch (e) {
    dispatch(setVisibilityLoader(false));
    console.error('Произошла следующая ошибка: ', e.message);
  }
};
