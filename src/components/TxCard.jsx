import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { formatDate } from "../utils/helper";

const TxCard = ({ transaction }) => {
  return (
    <Card
      sx={{
        height: "fit-content",
        p: 2,
        border: `3px solid ${transaction.type == "income" ? "green" : "red"}`,
      }}
      elevation={6}
    >
      <Typography mb={1} variant="h6">
        {transaction.description}
      </Typography>
      <Typography mb={1} variant="subtitle1">
        Amount :
        {`${transaction.type == "income" ? "+" : "-"}${transaction.amount}`}
      </Typography>
      <Typography mb={1} variant="subtitle2">
        Category : {transaction.category}
      </Typography>
      <Typography variant="subtitle2">
        Date : {formatDate(transaction.createdAt)}
      </Typography>
    </Card>
  );
};

export default TxCard;
