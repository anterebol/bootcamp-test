import { useEffect } from 'react';
import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { CharactersList } from './components/CharactersList/CharactersList';
import { getCharacters } from './store/api/api';
import { Popup } from './components/Popup/Popup';

function App() {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector((state) => state.appReducer);
  useEffect(() => {
    dispatch(getCharacters(currentPage));
  }, [currentPage, dispatch]);
  return (
    <>
      <Popup />
      <CharactersList />
    </>
  );
}

export default App;
