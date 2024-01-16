import { useAppSelector } from '../../hooks/hooks';
import { CharacterCard } from './CharacterCard/CharacterCard';
import './charactersList.scss';

export const CharactersList = () => {
  const { characters } = useAppSelector((state) => state.appReducer);
  return (
    <ul className="list-characters">
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </ul>
  );
};
