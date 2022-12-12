import { Anime } from "../../../services/interface/service";
import { MediaBody } from "../../styles/MediaBox";
import Synopsis from "../../elements/Synopsis";
import HeaderCountDown from "../../elements/HeaderCountDown";
const Body = ({ anime }: Anime) => {
  console.log("🚀 ~ file: Body.tsx ~ line 6 ~ Body ~ anime", anime)
  return (
    <MediaBody>
      <div>
        <HeaderCountDown
          props={[
            anime.num_episodes,
            anime.source,
            anime.start_date,
            anime.broadcast,
          ]}
        />
      </div>
      <Synopsis props={anime.synopsis} />
    </MediaBody>
  );
};

export default Body;
