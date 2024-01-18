import { useAppSelector } from '../../hooks/hooks';
import { Preloader } from '../Preloader/Preloader';
import { CharacterCard } from './CharacterCard/CharacterCard';
import './charactersList.scss';

export const CharactersList = () => {
  const { characters, loading, isPagination } = useAppSelector(
    (state) => state.appReducer
  );
  return (
    <>
      <ul className="list-characters">
        {isPagination && loading ? <Preloader /> : characters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </ul>
      {!isPagination && loading ? <Preloader /> : null}
    </>
  );
};
