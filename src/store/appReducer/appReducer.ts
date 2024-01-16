import { createSlice } from "@reduxjs/toolkit";
import { CharacterType } from "../../types/characterType";
import { getCharacters } from "../api/api";

const initialState = {
  currentPage: 1,
  characters: [] as Array<CharacterType>,
  loading: false,
  pages: 1,
  isPagination: false,
}

export const appSlice = createSlice({
  name: 'reducer',
  initialState: {...initialState},
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    togglePagination: (state) => {
      state.isPagination = !state.isPagination;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
    })
    .addCase(
      getCharacters.fulfilled,
      (state, action) => {
        const {pages, data} = action.payload || [];
        if (state.isPagination) {
          state.characters = [...data];
        } else {
          state.characters = [...state.characters, ...data];
        }
        state.pages = pages;
      }
    )
    .addCase(getCharacters.rejected, (state) => {
      state.loading = true;
    })
  },
});
export default appSlice.reducer;
export const {setPage, togglePagination} = appSlice.actions;