import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState, useContext } from "react";
import { TxContext } from "../context/TxContext";

const Categories = [
  "Salary",
  "Rent",
  "EMI",
  "Electricity Bill",
  "Groceries",
  "Other",
];

const TxForm = () => {
  const { addTransaction } = useContext(TxContext);

  const [transaction, setTransaction] = useState({
    id: "",
    amount: "",
    description: "",
    category: "",
    type: "",
    createdAt: "",
  });

  console.log("Transaction => ", transaction);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTransaction({
      ...transaction,
      id: Date.now(),
      createdAt: Date.now(),
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(transaction);
  };

  return (
    <>
      <Stack
        minWidth={600}
        height={"fit-content"}
        gap={3}
        mx={"auto"}
        boxShadow={10}
        p={3}
        py={5}
        borderRadius={3}
      >
        <TextField
          id="outlined-basic"
          label="Enter Amount"
          variant="outlined"
          type="Number"
          name="amount"
          value={transaction.amount}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="outlined-basic"
          label="Enter Description"
          variant="outlined"
          name="description"
          value={transaction.description}
          onChange={(e) => handleChange(e)}
        />
        <FormControl sx={{ ml: 1 }}>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="income"
            name="type"
            value={transaction.type}
            onChange={(e) => handleChange(e)}
          >
            <FormControlLabel
              value="income"
              control={<Radio />}
              label="Income"
            />
            <FormControlLabel
              value="expenditure"
              control={<Radio />}
              label="Expenditure"
            />
          </RadioGroup>
        </FormControl>
        <FormControl size="small">
          <InputLabel id="demo-select-small-label">Category</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-simple-select"
            label="category"
            name="category"
            value={transaction.category}
            onChange={(e) => handleChange(e)}
          >
            {Categories.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          sx={{
            width: "200px",
            mx: "auto",
            bgcolor: "#C2CFF8",
            color: "#232222",
            boxShadow: 5,
          }}
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </Button>
      </Stack>
    </>
  );
};

export default TxForm;
