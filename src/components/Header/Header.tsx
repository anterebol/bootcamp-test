import { Button } from '../Button/Button';
import './header.scss';
import settingIcon from '../../assets/setting.svg';
import { Settings } from './Settings/Settings';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { toggleSettings } from '../../store/appReducer/appReducer';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { settingsOpened } = useAppSelector((store) => store.appReducer);
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="https://www.it-academy.by/upload/iblock/a5d/b7sd04q345czx7ffsohak1yonl2pk7eh.png"
          alt="IT Bootcamp logo"
        />
      </div>
      <div className="control-elements">
        <Button
          cls={['button__settings']}
          callback={() => {
            dispatch(toggleSettings(!settingsOpened));
          }}
        >
          <img src={settingIcon} alt="settings_img" />
        </Button>
      </div>
      <Settings />
    </header>
  );
};
