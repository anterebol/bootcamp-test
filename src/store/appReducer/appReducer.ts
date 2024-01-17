/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { CharacterType } from '../../types/characterType';
import { getCharacters } from '../api/api';

const initialState = {
  currentPage: 1,
  characters: [] as Array<CharacterType>,
  loading: false,
  currentCharacterId: null as string | null,
  openedPopup: false,
  pages: 1,
  isPagination: false,
};

export const appSlice = createSlice({
  name: 'reducer',
  initialState: { ...initialState },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    togglePagination: (state) => {
      state.isPagination = !state.isPagination;
    },
    openCharacterPopup: (state, action) => {
      state.currentCharacterId = action.payload;
      state.openedPopup = true;
    },
    closePopup: (state) => {
      state.openedPopup = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        const { pages, characters } = action.payload || [];
        if (state.isPagination) {
          state.characters = [...characters];
        } else {
          state.characters = [
            ...state.characters,
            ...characters,
          ] as CharacterType[];
        }
        state.pages = pages;
      })
      .addCase(getCharacters.rejected, (state) => {
        state.loading = true;
      });
  },
});
export default appSlice.reducer;
export const { setPage, togglePagination, openCharacterPopup, closePopup } =
  appSlice.actions;
