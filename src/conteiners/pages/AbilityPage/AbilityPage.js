import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchAbilityDetailData, setAbilityDetailData } from '../../../store/reducers/abilityPage/actions';
import { getAbilityDetailData } from '../../../store/reducers/abilityPage/selectors';

export default function AbilityPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const abilityDetailData = useSelector(getAbilityDetailData);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchAbilityDetailData(id, history));

    return () => {
      dispatch(setAbilityDetailData({}));
    };
  }, []);

  const abilityCard = useMemo(() => {
    if (Object.keys(abilityDetailData).length !== 0) {
      const ability = abilityDetailData.effect_entries.filter((item) => item.language.name === 'en');
      return (
        <div className="card" style={{ padding: '5px', marginTop: '15px' }}>
          <p><b>Описание способности:</b></p>
          {ability.length !== 0 ? ability[0].effect : 'У данной способности пока нет описания'}
        </div>
      );
    }

    return null;
  }, [abilityDetailData]);

  const goHomeHandler = () => {
    history.push('/');
  };

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <div className="container">
      <br />
      <button
        type="button"
        className="btn btn-success"
        onClick={goHomeHandler}
        style={{ marginRight: '15px' }}
      >
        На главную
      </button>

      {
        history.length > 2
        && (
        <button
          type="button"
          className="btn btn-success"
          onClick={goBackHandler}
        >
          Назад
        </button>
        )
      }
      {abilityCard}
    </div>
  );
}
