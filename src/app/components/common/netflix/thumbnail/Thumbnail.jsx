import { Link } from "react-router-dom";
// STYLES
import { styleImg, styleLink } from "./StylesThumbnail";

export default function Thumbnail({ image }) {
  // console.log(movie);
  return (
    <Link to={`#`} style={styleLink}>
      <div style={{ overflow: "hidden" }}>
        <img alt='movie poster' src={image} style={styleImg} />
      </div>
    </Link>
  );
};
