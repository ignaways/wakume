import { MediaOverlay } from "../styles/MediaBox";
import { TextStudioList } from "../styles/Text";

interface props {
  props: [string, { id: number; name: string }[]];
}

const Overlay = ({ props }: props) => {
  const mappingStudio = props[1].map((el: { name: string }, i: number) => {
    return i < 1 ? `${el.name}` : `, ${el.name}`;
  });

  return (
    <MediaOverlay>
      <div>{props[0]}</div>
      <TextStudioList>{mappingStudio}</TextStudioList>
    </MediaOverlay>
  );
};

export default Overlay;
