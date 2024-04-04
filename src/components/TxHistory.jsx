import React, { useContext } from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { TxContext } from "../context/TxContext";
import TxCard from "./TxCard";

const TxHistory = () => {
  const { transactions } = useContext(TxContext);

  return (
    <>
      <Stack direction={"row"} flexWrap={"wrap"} gap={2} mx={2}>
        {transactions.map((item) => (
          <TxCard transaction={item} />
        ))}
      </Stack>
    </>
  );
};

export default TxHistory;
