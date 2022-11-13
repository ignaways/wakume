import { ImageList } from "../styles/Image"

interface props {
  props:string[]
}

const MediaImage = ({props}:props) => {
  return(
    <>
      <ImageList alt={props[0]} src={props[1]} />
    </>
  )
}

export default MediaImage