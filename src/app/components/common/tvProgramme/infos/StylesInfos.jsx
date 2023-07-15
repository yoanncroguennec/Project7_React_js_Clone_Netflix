import { Box, Typography, styled } from "@mui/material";

export const RootInfos = styled(Box)(() => ({
  flex: "5",
}));

export const TypoTitleProgramme = styled(Typography)(({ type }) => ({
 fontWeight: "bold",
 margin: "0",
}));

export const TypoTypeProgramme = styled(Typography)(({ type }) => ({
  fontWeight: "bold",
}));

export const TypoDurationProgramme = styled(Typography)(({ type }) => ({
  fontWeight: "bold",
  marginRight: "20px",
}));

export const TypoUnpublishedProgramme = styled(Typography)(({ type }) => ({
  color: "#FF0000",
  fontWeight: "bold",
  marginRight: "20px",
}));

export const TypoLiveProgramme = styled(Typography)(({ type }) => ({
  color: "#FF0000",
  fontWeight: "bold",
  marginRight: "20px",
}));
