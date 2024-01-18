import './characterCard.scss';
import { useEffect, useState } from 'react';
import { CharacterType } from '../../../types/characterType';
import { useAppDispatch } from '../../../hooks/hooks';
import { openCharacterPopup } from '../../../store/appReducer/appReducer';

export const CharacterCard = (props: {
  key: string;
  character: CharacterType;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { character } = props;
  const { name, image, id } = character;
  const dispath = useAppDispatch();
  useEffect(() => {
    const currentImage = document.createElement('img');
    currentImage.src = image;
    currentImage.addEventListener('load', () => {
      setTimeout(() => {
        setImageLoaded(true);
      }, 500);
    });
  }, []);

  return (
    <li
      className="character-card"
      onClick={() => {
        dispath(openCharacterPopup(id));
      }}
    >
      {imageLoaded ? (
        <div className="character-card__img">
          <img src={image} alt={`${name}-img`} />
        </div>
      ) : (
        <div className="character-card__preloader" />
      )}
      <p className="character-card__name">{name}</p>
    </li>
  );
};
