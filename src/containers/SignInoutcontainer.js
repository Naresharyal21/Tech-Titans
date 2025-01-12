import { Box, Paper, Tab, Tabs } from "@mui/material";
import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

export default function SignInOutContainer() {
  const [value, setValue] = React.useState(0);
  const paperstyle = {
    padding: "30px 20px",
    width: "300px",

    borderRadius: 50,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel({ children, value, index, ...other }) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  }

  return (
    <Paper
      style={{
        padding: "20px",
        margin: "20px auto",
        maxWidth: 400,
        backgroundColor: " light gray",
        
    
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Sign-in/out tabs"
        centered
      >
        <Tab label="SIGNIN" />
        <Tab label="SIGNUP" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup />
      </TabPanel>
    </Paper>
  );
}
