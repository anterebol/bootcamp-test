import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCharacters = createAsyncThunk('gedCharacters', 
  async (page: string | number) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/?count=20&page=${page}`);
    if (!data.ok) {
      throw new Error('Something went wrong');
    } else {
      const {info, results} = await data.json();
      const res = {pages: info.pages, data: results}
      return res;
    }
  }
)