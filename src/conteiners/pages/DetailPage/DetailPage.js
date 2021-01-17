import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getPokemonDetailData } from '../../../store/reducers/detailPage/selectors';
import { fetchPokemonDetailData, setPokemonDetailData } from '../../../store/reducers/detailPage/actions';
import noImage from './no-image.png';

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemonDetailData = useSelector(getPokemonDetailData);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchPokemonDetailData(id, history));

    return () => {
      dispatch(setPokemonDetailData({}));
    };
  }, []);

  const detailCard = useMemo(() => {
    if (Object.keys(pokemonDetailData).length !== 0) {
      return (
        <>
          <p><b>Имя:</b> {pokemonDetailData.name}</p>
          <p><b>Тип:</b>
            <ul>
              {
                pokemonDetailData.types.map(
                  (item) => <li key={item.type.name}>{item.type.name}</li>,
                )
              }
            </ul>
          </p>
          <p><b>Характеристики:</b>
            <ul>
              <li>base_experience: {pokemonDetailData.base_experience}</li>
              <li>height: {pokemonDetailData.height}</li>
              <li>order: {pokemonDetailData.order}</li>
              <li>weight: {pokemonDetailData.weight}</li>
            </ul>
          </p>
          <p><b>Список способностей:</b>
            <ul>
              {
                pokemonDetailData.abilities.map(
                  (item) => {
                    const abilityId = item.ability.url.split('/')[6];
                    const linkUrl = `/ability/${abilityId}`;

                    return (
                      <Link to={linkUrl} key={abilityId}>
                        <li>{item.ability.name}</li>
                      </Link>
                    );
                  },
                )
              }
            </ul>
          </p>
        </>
      );
    }

    return null;
  }, [pokemonDetailData]);

  const onErrorHandler = (e) => { e.target.src = noImage; };

  const goHomeHandler = () => {
    history.push('/');
  };

  return (
    <div className="container">
      <br />
      <button
        type="button"
        className="btn btn-success"
        onClick={goHomeHandler}
      >
        На главную
      </button>
      <div className="row">
        <div className="col-md-6" style={{ padding: '15px' }}>
          <div className="card" style={{ padding: '5px', width: 'inherit' }}>
            <img
              src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
              alt={pokemonDetailData.name}
              style={{ width: 'inherit' }}
              onError={onErrorHandler}
            />
          </div>
        </div>
        <div className="col-md-6" style={{ padding: '15px' }}>
          <div className="card" style={{ padding: '5px' }}>
            {detailCard}
          </div>
        </div>
      </div>
    </div>
  );
}
