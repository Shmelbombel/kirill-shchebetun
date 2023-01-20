import { styled } from "@mui/material";

export const ContainerSC = styled("section")(() => ({
  maxWidth: "1950px",
  width: "100%",
  margin: "0 auto",
  padding: "0 15px",
  "@media (max-width: 768px)": {
    padding: "0 10px",
  },
}));
