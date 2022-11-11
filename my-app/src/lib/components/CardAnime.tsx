import { CardList } from "../elements/Card";
const CardAnime = ({ detail }: any) => {
  const anime = detail.node;
  return (
    <>
      <CardList>
        <div 
        style={{
          backgroundColor:'yellow',
          display:'flex',
          flexDirection:'column',
          justifyContent:'flex-end'
          // position:'relative', 
          // height:'265px',
          // float:'left'
        }}
        >
          <div style={{
            backgroundColor:'green',
            // position:'relative',
            // width:'100%',
            // height: '2em',
            // float: 'left',
            // opacity:.5,
            // top:0,
            padding:'12px',
            textAlign:'left',
            fontSize:'1rem',
            fontWeight:600
          }}>
            <a style={{
              // position:'relative',
              color:'white',
            }}>
              {anime.title}
            </a>
            <div>
              <a>
                Mappa
              {/* {anime.studios} */}
              </a>
            </div>
            </div>
        {/* <img src={`${anime.main_picture.large}`} alt={`${anime.title}`} 
          style={{
            objectFit:'cover',
            objectPosition:'center'
          }}
          /> */}

        </div>
        {/* {anime.title} */}
      </CardList>
    </>
  );
};

export default CardAnime;
