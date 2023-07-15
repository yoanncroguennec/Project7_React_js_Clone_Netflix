import { Box, styled } from "@mui/material";

export const RootTvProgrammes = styled(Box)(() => ({
  alignItems: "center",
  color: "#FFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
}));

export const BoxTitle = styled(Box)(({ type }) => ({
  display: "flex",
  justifyContent: "space-around",
  paddingBottom: "40px",
  width: "150px",
}));

export const stylesImgLogo = {
  height: "80px",
}