import { styled, Box } from "@mui/material";

export const RootNavbar = styled(Box)(({ theme }) => ({
  alignItems: "center",
  background: "linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%)",
  color: "white",
  display: "flex",
  flexWrap: "nowrap",
  fontSize: "14px",
  height: " 100px",
  justifyContent: "space-between",
  position: "fixed",
  top: "0",
  width: "100%",
  zIndex: "999",
  [theme.breakpoints.down("sm")]: {},
}));

export const styleImgLogo = {
  marginRight: "20px",
  width: "120px",
};

export const styleLink = {
  alignItems: "center",
  color: "#FFF",
  cursor: "pointer",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  marginRight: "20px",
  marginLeft: "55px",
  textDecoration: "none",
  textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
};

export const BoxDropdownNavbar = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  marginRight: "55px",
}));
