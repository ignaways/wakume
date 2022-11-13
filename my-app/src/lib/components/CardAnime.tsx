import { MediaCard } from "../styles/Card";
import { CoverList } from "../styles/Cover";
import { OverlayList } from "../styles/Overlay";

import MediaImage from "../elements/MediaImage";

const CardAnime = ({ detail }: any) => {
  const anime = detail.node;
  return (
    <>
      <MediaCard>
        <CoverList>
          <MediaImage props={[anime?.title, anime?.main_picture?.large]} />
          {/* <div
            style={{
              // backgroundColor: "blue",
              color: "white",
              zIndex: 3,
              padding: "12px",
              background:'rgba(0,0,0,0.6)',
              textAlign: "left",
              fontWeight: "600",
              fontSize: ".95rem",
              // position:'relative'
            }}
          > */}
          <OverlayList>
            <div>
              {anime.title}
            </div>
            <div
              style={{
                fontSize: ".8rem",
                fontWeight: "600",
                marginTop: "8px",
              }}
            >
              Mappa
            </div>
            {/* {anime.studios} */}
          {/* </div> */}
          {/* <img src={`${anime.main_picture.large}`} alt={`${anime.title}`} 
          style={{
            objectFit:'cover',
            objectPosition:'center'
          }}
          /> */}
          </OverlayList>
        </CoverList>
      </MediaCard>
      {/* </CardList> */}
    </>
  );
};

export default CardAnime;
