import { Box, Typography, styled } from "@mui/material";

export const RootContent = styled(Box)(() => ({
  alignItems: "flex-start",
  borderBottom: "solid #e5e5e5 2px",
  display: "flex",
  padding: "20px 0",
  width: "100%",
}));

export const TypoTimeProgramme = styled(Typography)(({ type }) => ({
  alignItems: "center",
  display: "flex",
  height: "80px",
  flex: "1",
  fontWeight: "bold",
  paddingRight: "20px",
}));

export const BoxImgProgramme = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  height: "80px",
  flex: "1",
  paddingRight: "20px",
}));

export const stylesImgProgramme = {
  borderRadius: "5px",
};
