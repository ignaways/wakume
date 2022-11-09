import axios from 'axios'
import { useEffect } from 'react';
import CardAnime from "../lib/components/CardAnime";
import "../lib/styles/display.css";

const MappingList = () => {
  const getApi = async () => {
    try {
      const response:any = await axios.get('https://api.myanimelist.net/v2/anime/season/2017/summer?limit=4',{
        headers: {
          'content-type': 'application/json',
          'X-MAL-CLIENT-ID':'71edbf3aeb1b7544dd6ac9fbf140e4b4',
          'Access-Control-Allow-Origin': '*'
        }
      })
      console.log('response>>',response)
    } catch (error) {
      console.log('error>>',error)
    }
  }
  const dataMapping = [1, 2, 3, 4, 1, 2, 3, 4].map(() => {
    return (
      <>
        <CardAnime />
      </>
    );
  });

  useEffect(()=> {
    getApi()
  },[])

  return (
    <>
      <div className="container__grid">{dataMapping}</div>
    </>
  );
};

export default MappingList;
