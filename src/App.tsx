import { useEffect } from 'react';
import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { CharactersList } from './components/CharactersList/CharactersList';
import { getCharacters } from './store/api/api';
import { Popup } from './components/Popup/Popup';
import { Pagination } from './components/Pagination/Pagination';
import { Header } from './components/Header/Header';
import { setPage } from './store/appReducer/appReducer';
import { Button } from './components/Button/Button';
import top from './assets/arrows/top.svg';

function App() {
  const dispatch = useAppDispatch();
  const { currentPage, isPagination } = useAppSelector(
    (state) => state.appReducer
  );

  const setPageByScrolling = () => {
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const position = scrolled + screenHeight;
    if (position + 50 >= scrollHeight) {
      dispatch(setPage(currentPage + 1));
    }
  };

  useEffect(() => {
    if (!isPagination) {
      window.addEventListener('scroll', setPageByScrolling);
    }
    dispatch(getCharacters(currentPage));
    return () => {
      window.removeEventListener('scroll', setPageByScrolling);
    };
  }, [currentPage, isPagination]);

  return (
    <>
      <Header />
      <main className="main">
        <Popup />
        <CharactersList />
        {isPagination ? <Pagination /> : null}
      </main>
      <Button
        cls={['top-button']}
        callback={() => {
          document.getElementsByTagName('html')[0]?.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <img src={top} alt="top" />
      </Button>
    </>
  );
}

export default App;
