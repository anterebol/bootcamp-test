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
  pages: 0,
  settingsOpened: false,
  isPagination: false,
};

export const appSlice = createSlice({
  name: 'reducer',
  initialState: { ...initialState },
  reducers: {
    setPage: (state, action) => {
      if (action.payload <= state.pages && action.payload > 0) {
        state.currentPage = action.payload;
      }
    },
    togglePagination: (state) => {
      if (state.isPagination) {
        state.isPagination = !state.isPagination;
        state.currentPage = 1;
      } else {
        state.isPagination = !state.isPagination;
      }
    },
    openCharacterPopup: (state, action) => {
      state.currentCharacterId = action.payload;
      state.openedPopup = true;
    },
    closePopup: (state) => {
      state.openedPopup = false;
    },
    toggleSettings: (state, action) => {
      state.settingsOpened = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        const { pages, characters } = action.payload || [];
        if (state.isPagination || state.currentPage === 1) {
          state.characters = [...characters];
        } else {
          state.characters.push(...characters);
        }
        state.pages = pages;
        state.loading = false;
      })
      .addCase(getCharacters.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default appSlice.reducer;
export const {
  setPage,
  togglePagination,
  openCharacterPopup,
  closePopup,
  toggleSettings,
} = appSlice.actions;
