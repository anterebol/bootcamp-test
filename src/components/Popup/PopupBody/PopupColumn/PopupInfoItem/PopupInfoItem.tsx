import { toUpFirstLetter } from '../../../../../utils/toUpFirstLetter';

export const PopupInfoItem = (props: {
  text: string;
  key: string;
  title: string;
}) => {
  const { text, title } = props;
  return (
    <div className="popup-content__info-item">
      <h3>{toUpFirstLetter(title)}</h3>
      <p>{text}</p>
    </div>
  );
};
