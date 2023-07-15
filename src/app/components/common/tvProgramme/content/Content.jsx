// COMMON
import Infos from "../infos/Infos";
// STYLES
import {
  RootContent,
  TypoTimeProgramme,
  BoxImgProgramme,
  stylesImgProgramme,
} from "./StylesContent";

export default function Content(props) {
  const { time, image, title, duration, type, isUnseen, direct } = props.item;

  return (
    <RootContent className='content'>
      <TypoTimeProgramme variant=''>{time}</TypoTimeProgramme>
      <BoxImgProgramme className='sm-wrapper'>
        <img alt='pic' src={image} style={stylesImgProgramme}></img>
      </BoxImgProgramme>
      <Infos
        title={title}
        duration={duration}
        type={type}
        isUnseen={isUnseen}
        direct={direct}
      />
    </RootContent>
  );
};
