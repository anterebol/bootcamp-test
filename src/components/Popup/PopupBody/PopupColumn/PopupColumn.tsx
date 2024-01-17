import { CharacterType } from '../../../../types/characterType';
import { PopupInfoItem } from './PopupInfoItem/PopupInfoItem';

export const PopupColumn = (props: {
  character: CharacterType;
  columnKeys: Array<string>;
}) => {
  const { character, columnKeys } = props;
  return (
    <div className="popup-content__info-column">
      {Object.entries(character).map(([key, value]) => {
        if (columnKeys.includes(key)) {
          if (typeof value === 'string') {
            return <PopupInfoItem key={key} title={key} text={value} />;
          }
          return <PopupInfoItem key={key} title={key} text={value.name} />;
        }
        return null;
      })}
    </div>
  );
};
