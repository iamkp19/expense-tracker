import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import { TxContext } from "../context/TxContext";

const BalanceInfo = () => {
  const { transactions } = useContext(TxContext);

  const amounts = transactions.map((transaction) => Number(transaction.amount));

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  console.log("Amount => ", amounts);
  console.log("Total => ", total);

  const incomeAmount = transactions
    .filter((item) => item.type === "income")
    .map((item) => Number(item.amount))
    .reduce((acc, item) => (acc += item), 0);

  const expenseAmount = transactions
    .filter((item) => item.type === "expenditure")
    .map((item) => Number(item.amount))
    .reduce((acc, item) => (acc += item), 0);

  const balanceData = [
    {
      title: "Total",
      value: total,
    },
    {
      title: "Income",
      value: incomeAmount,
    },
    {
      title: "Expense",
      value: expenseAmount,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 3,
        my: 4,
      }}
    >
      {balanceData.map(({ title, value }) => (
        <Card sx={{ width: 250 }} elevation={6}>
          <CardContent>
            <Typography sx={{ fontSize: 26 }}>{title}</Typography>
            <Typography sx={{ fontSize: 20, pl: 1, pt: 2 }}>{value}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default BalanceInfo;
