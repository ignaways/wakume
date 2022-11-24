import { Anime } from "../../../services/interface/service";
import { MediaFooter, MediaGenres } from "../../styles/MediaBox";
import Genre from "../../elements/Genre";
const Footer = ({ anime }: Anime) => {
  return (
    <MediaFooter style={{ backgroundColor: "#cddeff" }}>
      <MediaGenres>
        <Genre genres={anime.genres} />
      </MediaGenres>
      <div>icon</div>
    </MediaFooter>
  );
};

export default Footer;
