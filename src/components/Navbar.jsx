import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "center", flexGrow: 1 }}
        >
          Expense Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
