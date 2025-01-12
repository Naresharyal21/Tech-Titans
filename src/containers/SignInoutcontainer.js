import { Box, Paper, Tab, Tabs } from "@mui/material";
import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

export default function SignInOutContainer() {
  const [value, setValue] = React.useState(0);
  // const paperstyle = {
  //   padding: 20,
  //   height: "auto",
  //   width: 300,
    
  //   backgroundColor: "rgba(255, 255, 255, 0.2)",
  //   boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
  //   backdropFilter: "blur(10px)",
  
  // };

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
