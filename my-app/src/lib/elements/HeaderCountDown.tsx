import { episodeOngoing, countDownEpisode, convertDate, convertUppercase } from "../../services/utils/helpers";
import { TextHeaderBody, TextHeaderBody__Title, TextHeaderBody__Countdown, TextHeaderBody__Source } from "../styles/Text";

const HeaderCountDown = ({ props }: any) => {
  console.log("🚀 ~ file: HeaderCountDown.tsx:4 ~ HeaderCountDown ~ props", props);
  const episodes = props[0];
  const source = props[1];
  const startDate = props[2];
  const releaseDate = props[3];

  const totalEpisode = episodeOngoing(startDate);
  const countDownEp = countDownEpisode(releaseDate);
  const airingEp = convertDate(startDate);
  const textSource = convertUppercase(source);

  const episodeStillOngoing = (
    <>
      <TextHeaderBody__Title>
        {episodes > 0 ? ` Ep ${totalEpisode} of ${episodes} airing in` : `Ep ${totalEpisode} airing in`}
      </TextHeaderBody__Title>
      <TextHeaderBody__Countdown>
        {countDownEp}
      </TextHeaderBody__Countdown>
    </>
  );
  const episodeDone = (
    <>
      <TextHeaderBody__Title>
        {episodes} Episodes aired on
      </TextHeaderBody__Title>
      <TextHeaderBody__Countdown>
        {airingEp}
      </TextHeaderBody__Countdown>
    </>
  );

  return (
    <TextHeaderBody>
      {totalEpisode > episodes && episodes !== 0 ? episodeDone : episodeStillOngoing}
      <TextHeaderBody__Source>source • {textSource}</TextHeaderBody__Source>
    </TextHeaderBody>
  );
};

export default HeaderCountDown;
