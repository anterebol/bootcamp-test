import './characterCard.scss';
import { CharacterType } from '../../../types/characterType';

export const CharacterCard = (props: {
  key: string;
  character: CharacterType;
}) => {
  const { character } = props;
  const { name, image } = character;

  return (
    <li className="character-card">
      <div className="character-card__img">
        <img src={image} alt={`${name}-img`} />
      </div>
      <p className="character-card__name">{name}</p>
    </li>
  );
};
