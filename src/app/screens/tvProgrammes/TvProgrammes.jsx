// COMMONS
import { Content } from "../../components/common";
// UTILS IMG
import Logo from "../../utils/assets/imgs/logoM6.jpg";
// UTILS JSON
import program from "../../utils/assets/json/tv-program.json";
// STYLES
import {
  BoxTitle,
  RootTvProgrammes,
  stylesImgLogo,
} from "./StylesTvProgrammes";

export default function TvProgrammes() {
  return (
    <RootTvProgrammes>
      <BoxTitle>
        <img alt='M6 Logo' src={Logo} style={stylesImgLogo} />
      </BoxTitle>
      {program.map((item) => {
        return <Content item={item} key={item.title}></Content>;
      })}
    </RootTvProgrammes>
  );
}
