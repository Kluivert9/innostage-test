import PokemonService from '../../../services/PokemonService';
import { setVisibilityLoader } from '../app/actions';

export const types = {
  SET_ABILITY_DETAIL_DATA: 'abilityPage/SET_ABILITY_DETAIL_DATA',
};

export function setAbilityDetailData(data) {
  return {
    type: types.SET_ABILITY_DETAIL_DATA,
    payload: { data },
  };
}

export const fetchAbilityDetailData = (id, history) => async (dispatch) => {
  try {
    dispatch(setVisibilityLoader(true));
    const service = new PokemonService();
    const res = await service.getAbilityDetailData(id);
    dispatch(setAbilityDetailData(res));
    dispatch(setVisibilityLoader(false));
  } catch (e) {
    dispatch(setVisibilityLoader(false));
    history.push('/');
    console.error('Произошла следующая ошибка: ', e.message);
  }
};
