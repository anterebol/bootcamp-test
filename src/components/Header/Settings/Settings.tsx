import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { togglePagination } from '../../../store/appReducer/appReducer';
import { joinClasses } from '../../../utils/joinClasses';
import './settings.scss';

export const Settings = () => {
  const dispatch = useAppDispatch();
  const { settingsOpened } = useAppSelector((store) => store.appReducer);

  return (
    <ul className={joinClasses(['settings', settingsOpened ? 'open' : ''])}>
      <li>
        <label className="settings__item" htmlFor="switcher-pagination">
          <div className="settings__item-cover" />
          Pagination
          <input
            type="checkbox"
            onChange={() => {
              dispatch(togglePagination());
            }}
            id="switcher-pagination"
          />
        </label>
      </li>
    </ul>
  );
};
