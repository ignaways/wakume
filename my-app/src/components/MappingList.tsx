import axios from "axios";
import { useEffect, useState } from "react";
import CardAnime from "../lib/components/CardAnime";
import "../lib/styles/display.css";

const MappingList = () => {
  const [listAnime, setListAnime] = useState([]);
  const getApi = async () => {
    try {
      const response: any = await axios.get(
        "http://localhost:4000/anime/list?year=2022&season=fall"
      );
      setListAnime(response.data.data);
    } catch (error) {
      console.log("error>>", error);
      throw error
    }
  };
  const dataMapping = listAnime.map((e: any) => {
    return (
      <>
        {
        e.node.id !== 21 && e.node.id !== 34566 && (
          <CardAnime key={e.node.id} detail={e} />
        )}
      </>
    );
  });

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="container__grid">
        {dataMapping}
      </div>
    </>
  );
};

export default MappingList;
