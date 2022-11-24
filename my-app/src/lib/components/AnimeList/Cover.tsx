import { MediaCover } from "../../styles/MediaBox";
import Overlay from "../../elements/Overlay";
import MediaImage from "../../elements/MediaImage";
import { Anime } from "../../../services/interface/service";

const Cover = ({ anime }: Anime) => {
  return (
    <MediaCover>
      <MediaImage props={[anime?.title, anime?.main_picture?.large]} />
      <Overlay props={[anime?.title, anime?.studios]} />
    </MediaCover>
  );
};

export default Cover;
