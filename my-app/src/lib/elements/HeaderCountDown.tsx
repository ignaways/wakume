import { episodeOngoing, countDownEpisode, convertDate, convertUppercase } from "../../services/utils/helpers";

const HeaderCountDown = ({ props }: any) => {
  // console.log("🚀 ~ file: HeaderCountDown.tsx:4 ~ HeaderCountDown ~ props", props)
  const episodes = props[0];
  const source = props[1];
  const startDate = props[2];
  const releaseDate = props[3];

  const totalEpisode = episodeOngoing(startDate);
  const countDownEp = countDownEpisode(releaseDate);
  const airingEp = convertDate(startDate)
  const textSource = convertUppercase(source)

  console.log("🚀 ~ file: helpers.tsx:67 ~ episodeOngoing ~ totalEpisode", totalEpisode)

  const episodeStillOngoing = (
    <>
      <div>
        {
          episodes > 0 ? ` Ep ${totalEpisode} of ${episodes} airing in` : `Ep ${totalEpisode} airing in`
        }
      </div>
      <div>{countDownEp}</div>
    </>
  );
  const episodeDone = (
    <>
      <div>{episodes} Episodes aired on</div>
      <div>{airingEp}</div>
    </>
  );

  return (
    <div>
      {totalEpisode > episodes && episodes !== 0 ? episodeDone : episodeStillOngoing}
      <div>source • {textSource}</div>
    </div>
  );
};

export default HeaderCountDown;
