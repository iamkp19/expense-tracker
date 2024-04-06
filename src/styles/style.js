import { styled, Box } from "@mui/material";

export const TxHistoryContainer = styled(Box)(() => ({
  margin: "15px auto 0",
  display: "grid",
  gridGap: "1rem",

  "@media (min-width: 600px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width: 900px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  "@media (min-width: 1200px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));
