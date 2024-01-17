import { CharacterType } from "./characterType";

export type CharacterResponseType = {
  info: { pages: number };
  results: Array<CharacterType>;
};
