import './characterCard.scss';
import { CharacterType } from '../../../types/characterType';
import { useAppDispatch } from '../../../hooks/hooks';
import { openCharacterPopup } from '../../../store/appReducer/appReducer';

export const CharacterCard = (props: {
  key: string;
  character: CharacterType;
}) => {
  const { character } = props;
  const { name, image, id } = character;
  const dispath = useAppDispatch();

  return (
    <li
      className="character-card"
      onClick={() => {
        dispath(openCharacterPopup(id));
      }}
    >
      <div className="character-card__img">
        <img src={image} alt={`${name}-img`} />
      </div>
      <p className="character-card__name">{name}</p>
    </li>
  );
};
