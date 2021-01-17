import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonData, setCurrentPage } from '../../../store/reducers/mainPage/actions';
import { getCurrentPage, getPokemonList, getTotalCount } from '../../../store/reducers/mainPage/selectors';
import Pagination from '../../../components/Pagination';
import PokemonCard from '../../../components/PokemonCard';
import st from './MainPage.module.css';

export default function MainPage() {
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);
  const pokemonList = useSelector(getPokemonList);
  const totalCount = useSelector(getTotalCount);
  const pokemonListItem = useMemo(() => pokemonList.map((item) => {
    const pokemonId = item.url.split('/')[6];
    const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;

    return <PokemonCard pokemonId={pokemonId} imgUrl={imgUrl} name={item.name} key={pokemonId} />;
  }), [pokemonList]);

  useEffect(async () => {
    dispatch(setPokemonData(currentPage));
  }, [currentPage]);

  const setCurPage = useCallback((page) => {
    dispatch(setCurrentPage(page));
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Список покемонов</h2>
      <div className={st.pokemon_list_wrap}>
        {pokemonListItem}
      </div>
      <Pagination totalCount={totalCount} setCurPage={setCurPage} currentPage={currentPage} />
    </div>
  );
}
