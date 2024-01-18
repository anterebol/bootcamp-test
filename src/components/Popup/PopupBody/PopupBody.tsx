import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import './popupBody.scss';
import { CharacterType } from '../../../types/characterType';
import { PopupColumn } from './PopupColumn/PopupColumn';
import { leftColumnKeys, rightColumnKeys } from '../../../constants/columnKeys';

export const PopupBody = () => {
  const [currentCharacter, setCurrentCharacter] = useState({} as CharacterType);
  const { currentCharacterId, characters } = useAppSelector(
    (store) => store.appReducer
  );
  useEffect(() => {
    setCurrentCharacter(
      characters?.filter(
        (character) => character.id === currentCharacterId
      )[0] || {}
    );
  }, [currentCharacterId, characters]);

  return (
    <div className="popup__body">
      <div className="popup-content">
        <div className="popup-content__cover" />
        <div
          className="popup-content__image"
          style={{
            background: `url(${currentCharacter.image}) no-repeat center / cover`,
          }}
        />
        <div className="popup-content__info">
          <PopupColumn
            character={currentCharacter}
            columnKeys={leftColumnKeys}
          />
          <PopupColumn
            character={currentCharacter}
            columnKeys={rightColumnKeys}
          />
        </div>
      </div>
    </div>
  );
};
