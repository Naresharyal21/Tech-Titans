import React from "react";
import {
  Avatar,
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Signup() {
  const paperStyle = {
    padding: "30px 20px",
    width: "300px",
    height: "auto",
    margin: "20px auto",
    borderRadius: 50,
  };
  const avatarStyle = { backgroundColor: "#4CAF50" };
  const textFieldStyle = { margin: "10px 0" };
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    accessCode: "",
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    accessCode: Yup.string()
      .required("Access Code is required")
      .oneOf(["TEACHER2025"], "Invalid access code"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data: ", values);
    alert("Signup Successful!");
    resetForm();
  };

  return (
    <Box>
      <Paper elevation={20} style={paperStyle}>
        <Box align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Sign Up</Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <Field
                as={TextField}
                style={textFieldStyle}
                name="fullname"
                label="Full Name"
                placeholder="Enter your full name"
                fullWidth
              />
              <ErrorMessage
                name="fullname"
                component="div"
                style={{ color: "red" }}
              />
              <Field
                as={TextField}
                style={textFieldStyle}
                name="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", fontSize: "0.8em" }}
              />
              <Field
                as={TextField}
                style={textFieldStyle}
                name="accessCode"
                label="Enter Acess code"
                placeholder="Enter your Acess Code"
                type="password"
                fullWidth
              />
              <ErrorMessage
                name="accessCode"
                component="div"
                style={{ color: "red", fontSize: "0.8em" }}
              />
              <Field
                as={TextField}
                style={textFieldStyle}
                name="password"
                label="Password"
                type="password"
                fullWidth
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />
              <Field
                as={TextField}
                style={textFieldStyle}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
              />
             
              <ErrorMessage
                name="confirmPassword"
                component="div"
                style={{ color: "red" }}
              />
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                style={{ marginTop: "15px" }}
              >
                SIGN UP
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}