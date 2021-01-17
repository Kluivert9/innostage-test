import React from 'react';
import { Link } from 'react-router-dom';
import st from './PokemonCard.module.css';
import noImage from './no-image.png';

// eslint-disable-next-line react/prop-types
export default function PokemonCard({ pokemonId, imgUrl, name }) {
  const onErrorHandler = (e) => {
    e.target.src = noImage;
  };

  return (
    <Link to={`pokemon/${pokemonId}`}>
      <div className={st.card_wrap}>
        <img
          src={imgUrl}
          alt={name}
          className={st.pokemon_img}
          onError={onErrorHandler}
        />
        <p>{name}</p>
      </div>
    </Link>
  );
}
