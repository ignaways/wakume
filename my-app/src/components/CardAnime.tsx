import { MediaCard } from "../lib/styles/MediaBox";
import { MediaBodyFotter } from "../lib/styles/MediaBox";
import Cover from "../lib/components/AnimeList/Cover";
import Body from "../lib/components/AnimeList/Body";
import Footer from "../lib/components/AnimeList/Footer";

import MediaImage from "../lib/elements/MediaImage";
const CardAnime = ({ detail }: any) => {
  const anime = detail.node;
  return (
    <MediaCard>
      <Cover anime={anime} />
      <MediaBodyFotter>
        <div style={{
          position:'relative',
          overflow:'hidden',
          minHeight: 0
        }}>
          <div style={{
            display:"block",
            overflowX: 'hidden',
            overflowY: 'scroll',
            height:'100%',
            width: '100%',
            boxSizing: 'content-box',
            paddingRight: '20px'
          }}>

          <Body anime={anime} />
          </div>
        </div>
        <Footer anime={anime} />
      </MediaBodyFotter>
    </MediaCard>
  );
};

export default CardAnime;
