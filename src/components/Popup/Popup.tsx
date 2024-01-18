/* eslint-disable jsx-a11y/no-static-element-interactions */
import './popup.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { joinClasses } from '../../utils/joinClasses';
import { PopupBody } from './PopupBody/PopupBody';
import { closePopup } from '../../store/appReducer/appReducer';

export const Popup = () => {
  const dispatch = useAppDispatch();
  const { openedPopup } = useAppSelector((store) => store.appReducer);
  return (
    <div className={joinClasses(['popup', openedPopup ? 'open' : ''])}>
      <div
        className="popup__cover"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(closePopup());
        }}
      />
      <PopupBody />
    </div>
  );
};
