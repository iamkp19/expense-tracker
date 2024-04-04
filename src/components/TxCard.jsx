import React from "react";
import { Box, Card, Typography } from "@mui/material";

const TxCard = ({ transaction }) => {
  let TxDate = new Date(transaction.createdAt);
  let FormatedDate =
    TxDate.getFullYear() +
    "/" +
    (TxDate.getMonth() + 1) +
    "/" +
    TxDate.getDate() +
    " " +
    TxDate.getHours() +
    ":" +
    TxDate.getMinutes() +
    ":" +
    TxDate.getSeconds();

  return (
    <Card
      sx={{
        height: "fit-content",
        p: 2,
        border: `3px solid ${transaction.type == "income" ? "green" : "red"}`,
      }}
      elevation={6}
    >
      <Typography variant="h5">{transaction.description}</Typography>
      <Typography mb={1} variant="h6">
        Amount :{" "}
        {`${transaction.type == "income" ? "+" : "-"}${transaction.amount}`}
      </Typography>
      <Typography mb={1} variant="subtitle2">
        Category : {transaction.category}
      </Typography>
      <Typography variant="subtitle2">Date : {FormatedDate}</Typography>
    </Card>
  );
};

export default TxCard;
