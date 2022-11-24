import { useState } from "react";
import { SynopsisStyle } from "../styles/BodyStyle";
import {
  elipsisHandler,
  remainingSynopsisHandler,
} from "../../services/utils/helpers";

const Synopsis = ({ props }: { props: string }) => {
  const [flagSynopsis, setFlagSinopsys] = useState(false);
  const halfSynopsis: string = elipsisHandler(props);
  const remainingSynopsis: string = remainingSynopsisHandler(props);

  return (
    <SynopsisStyle
      onMouseEnter={() => setFlagSinopsys(true)}
      onMouseLeave={() => setFlagSinopsys(false)}
    >
      <span>{halfSynopsis}</span>
      <span>{flagSynopsis ? remainingSynopsis : '...'}</span>
    </SynopsisStyle>
  );
};

export default Synopsis;
