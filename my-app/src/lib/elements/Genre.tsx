import { GenreStyle } from "../styles/GenreStyle";
interface genres {
  genres: {
    id: number;
    name: string;
  }[];
}
interface genre {
  id: number;
  name: string;
}
const Gendre = ({ genres }: genres) => {
  const mappingGenre = genres.map((e: genre, i: Number) => {
    return <GenreStyle>{e.name}</GenreStyle>;
  });
  return <>{mappingGenre}</>;
};

export default Gendre;
