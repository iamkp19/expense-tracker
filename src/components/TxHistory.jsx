import React, { useContext } from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { TxContext } from "../context/TxContext";
import TxCard from "./TxCard";
import { TxHistoryContainer } from "../styles/style";

const TxHistory = () => {
  const { transactions } = useContext(TxContext);

  return (
    <>
      {transactions.length < 1 && (
        <Typography variant="h5" mt={2} textAlign={"center"}>
          No Transaction Found
        </Typography>
      )}
      <TxHistoryContainer>
        {transactions.map((item) => (
          <TxCard transaction={item} />
        ))}
      </TxHistoryContainer>
    </>
  );
};

export default TxHistory;
