import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setPage } from '../../store/appReducer/appReducer';
import { setCurrentPagination } from '../../utils/setCurrentPagination';
import { Button } from '../Button/Button';
import './pagination.scss';
import left from '../../assets/arrows/left.svg';
import right from '../../assets/arrows/right.svg';

export const Pagination = () => {
  const { pages, currentPage } = useAppSelector((store) => store.appReducer);
  const dispatch = useAppDispatch();
  return (
    <ul className="pagination">
      <li key="pagination-left">
        <Button
          cls={['pagination__button']}
          callback={() => {
            dispatch(setPage(currentPage - 1));
          }}
          isDisable={currentPage - 1 === 0}
        >
          <img src={left} alt="left" />
        </Button>
      </li>
      {setCurrentPagination(currentPage, pages)?.map((page, index) => {
        const key = page.toString() + index;
        if (page === '...') {
          return (
            <li key={key} className="pagination__points">
              {page}
            </li>
          );
        }
        return (
          <li key={key}>
            <Button
              cls={['pagination__button', page === currentPage ? 'active' : '']}
              callback={() => {
                dispatch(setPage(page));
              }}
              text={page.toString()}
            />
          </li>
        );
      })}
      <li key="pagination-right">
        <Button
          cls={['pagination__button']}
          callback={() => {
            dispatch(setPage(currentPage + 1));
          }}
          isDisable={currentPage + 1 === pages + 1}
        >
          <img src={right} alt="right" />
        </Button>
      </li>
    </ul>
  );
};
