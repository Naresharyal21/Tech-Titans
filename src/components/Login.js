import React from "react";
import {
  Avatar,
  Box,
  Paper,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto ",
    borderRadius: 50,
  };
  const avtarstyle = { backgroundColor: "#4CAF50" };
  return (
    <Box>
      <Paper elevation={20} style={paperStyle}>
        <Box align="center">
          {" "}
          <Avatar style={avtarstyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
          <TextField
            id="loginname"
            label="User Name"
            placeholder="Enter Full Name"
          />
          <TextField
            id="loginemail"
            label="Email"
            placeholder="Enter Email"
            type="email"
          />
          <TextField
            id="loginpassword"
            label=" Password"
            placeholder="Enter password"
            type="password"
          />
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="primary"
            />
          </div>
        </Box>
      </Paper>
    </Box>
  );
}
