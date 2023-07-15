import { styled, Box } from "@mui/material";

export const RootLayoutApp = styled(Box)(({ theme }) => ({
    marginTop: "120px",
  [theme.breakpoints.down("sm")]: {},
}));
