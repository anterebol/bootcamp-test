import { useEffect } from 'react';
import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { CharactersList } from './components/CharactersList/CharactersList';
import { getCharacters } from './store/api/api';
import { Popup } from './components/Popup/Popup';
import { Pagination } from './components/Pagination/Pagination';
import { Header } from './components/Header/Header';

function App() {
  const dispatch = useAppDispatch();
  const { currentPage, isPagination } = useAppSelector(
    (state) => state.appReducer
  );
  useEffect(() => {
    dispatch(getCharacters(currentPage));
  }, [currentPage, dispatch]);
  return (
    <>
      <Header />
      <main className="main">
        <Popup />
        <CharactersList />
        {isPagination ? <Pagination /> : null}
      </main>
    </>
  );
}

export default App;
