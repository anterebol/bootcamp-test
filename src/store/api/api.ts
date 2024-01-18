import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../constants/url';
import { CharacterResponseType } from '../../types/characterResponseType';

export const getCharacters = createAsyncThunk(
  'gedCharacters',
  async (page: number, { rejectWithValue }) => {
    const res = await fetch(`${URL}?page=${page}`);

    if (!res.ok) {
      return rejectWithValue('Something went wrong');
    }

    const { info, results } = (await res.json()) as CharacterResponseType;

    const data = { pages: info.pages, characters: results };

    return data;
  }
);
