import {
  RootInfos,
  TypoDurationProgramme,
  TypoLiveProgramme,
  TypoTitleProgramme,
  TypoUnpublishedProgramme,
  TypoTypeProgramme,
} from "./StylesInfos";

export default function Infos(props) {
  const { title, type, duration, isUnseen, direct } = props;

  return (
    <RootInfos className='infos'>
      <TypoTitleProgramme variant='h6'>{title}</TypoTitleProgramme>
      <TypoTypeProgramme variant='body1'>{type}</TypoTypeProgramme>
      <div>
        <TypoDurationProgramme variant='body1'>
          {duration}
        </TypoDurationProgramme>
        {isUnseen && (
          <TypoUnpublishedProgramme variant='body1'>
            • Inédit
          </TypoUnpublishedProgramme>
        )}
        {direct && (
          <TypoLiveProgramme variant='body1'>• Direct</TypoLiveProgramme>
        )}
      </div>
    </RootInfos>
  );
}
