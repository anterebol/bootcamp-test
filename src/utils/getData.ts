export const getData = async (page: string) => {
  const data = await fetch(`https://rickandmortyapi.com/api/character/?count=20&page=${page}`);
}