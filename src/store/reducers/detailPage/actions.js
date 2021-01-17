import PokemonService from '../../../services/PokemonService';
import { setVisibilityLoader } from '../app/actions';

export const types = {
  SET_POKEMON_DETAIL_DATA: 'detailPage/SET_POKEMON_DETAIL_DATA',
};

export function setPokemonDetailData(data) {
  return {
    type: types.SET_POKEMON_DETAIL_DATA,
    payload: { data },
  };
}

export const fetchPokemonDetailData = (id, history) => async (dispatch) => {
  try {
    dispatch(setVisibilityLoader(true));
    const service = new PokemonService();
    const res = await service.getPokemonDetailData(id);
    dispatch(setPokemonDetailData(res));
    dispatch(setVisibilityLoader(false));
  } catch (e) {
    dispatch(setVisibilityLoader(false));
    history.push('/');
    console.error('Произошла следующая ошибка: ', e.message);
  }
};
