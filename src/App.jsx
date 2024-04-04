import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Box, Container, Stack } from "@mui/material";
import BalanceInfo from "./components/BalanceInfo";
import TxForm from "./components/TxForm";
import TxHistory from "./components/TxHistory";
import { GlobalProvider } from "./context/TxContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalProvider>
        <Box maxWidth={1200} mx={"auto"}>
          <Navbar />
          <BalanceInfo />
          <Stack gap={3} my={6}>
            <TxForm />
            <TxHistory />
          </Stack>
        </Box>
      </GlobalProvider>
    </>
  );
}

export default App;
