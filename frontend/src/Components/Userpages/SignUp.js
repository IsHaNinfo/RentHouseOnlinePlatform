import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import Login from "./Login";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";

const SignUp = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false); // State to control Login component's open state
  const [activeStep, setActiveStep] = useState(1); // State to track the active step
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLoginClick = () => {
    setLoginOpen(true); // Open the Login component when the login button is clicked
  };

  const handleLoginClose = () => {
    setLoginOpen(false); // Close the Login component
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSignUp = async () => {
    try {
      const userData = {
        Name,
        email,
        contactNumber,
        password,
        // Add the user role if needed
      };

      const response = await axios.post(
        "http://localhost:4000/api/user/signup",
        userData
      );

      if (response && response.data) {
        // Handle successful signup
        const { Name, email, contactNumber, password, _id } = response.data;
        console.log({
          Name,
          email,
          contactNumber,
          password,
          _id,
        });
      } else {
        // Handle invalid response
        console.log("Invalid response:", response);
      }
    } catch (error) {
      // Handle signup error
      console.log("Signup error:", error.response.data);
    }
  };

  return (
    <div>
      <Dialog
        open={props.handleSignOpen}
        onClose={props.handleSignClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "716px", // Set the desired width
            maxHeight: "550px",
            borderRadius: "15px", // Set the desired max height
          },
        }}
      >
        <DialogTitle
          textAlign="center"
          sx={{ fontSize: "25px", fontWeight: "bold" }}
        >
          Sign Up
        </DialogTitle>
        <DialogContent sx={{ ml: "35px" }}>
          <LinearProgress
            variant="determinate"
            sx={{
              width: "470px",

              backgroundColor: "#D9D9D9",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#14CE9E",
                width: "470px",

                // Set the color of the progress bar
              },
            }}
            value={(activeStep / 2) * 100} // Calculate the progress based on the active step
          />

          {activeStep === 1 && (
            <Box component="form" noValidate autoComplete="off">
              <FormLabel sx={{ fontWeight: "bold" }}>Name</FormLabel>
              <div>
                <TextField
                  label="Enter your name"
                  id="outlined-size-small"
                  size="small"
                  type=""
                  sx={{
                    width: "470px",
                    mt: "15px",
                    mb: "15px",
                  }}
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <FormLabel sx={{ fontWeight: "bold" }}>Email</FormLabel>
              <div>
                <TextField
                  label="Enter your email"
                  id="outlined-size-small"
                  size="small"
                  type="email"
                  sx={{
                    width: "470px",
                    mt: "15px",
                    mb: "15px",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <FormLabel sx={{ fontWeight: "bold" }}>Contact number</FormLabel>
              <TextField
                label="Enter your contact number"
                id="outlined-size-small"
                size="small"
                type="tel"
                inputProps={{
                  pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                }}
                sx={{
                  width: "470px",
                  mt: "15px",
                  mb: "15px",
                }}
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </Box>
          )}
          {activeStep === 2 && (
            <Box component="form" noValidate autoComplete="off">
              <FormLabel sx={{ fontWeight: "bold" }}>Password</FormLabel>
              <div>
                <TextField
                  label="Enter your password"
                  id="outlined-size-small"
                  size="small"
                  type={showPassword ? "text" : "password"}
                  sx={{
                    width: "470px",
                    mt: "15px",
                    mb: "15px",
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <FormLabel sx={{ fontWeight: "bold" }}>
                Confirm Password
              </FormLabel>
              <div>
                <TextField
                  label="Reenter your password"
                  id="outlined-size-small"
                  size="small"
                  type={showPassword ? "text" : "password"}
                  sx={{
                    width: "470px",
                    mt: "15px",
                    mb: "15px",
                  }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          {activeStep === 1 && (
            <Button
              sx={{
                color: "white",
                backgroundColor: "#14CE9E",
                fontSize: "25px",
                border: "1px solid #14CE9E",
                width: "224px",
                height: "51px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: "65px",
                textTransform: "capitalize",
                mt: "15px",

                mb: "25px",
                // Set text to lowercase
              }}
              onClick={handleNext}
            >
              Next
            </Button>
          )}
          {activeStep === 2 && (
            <>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#14CE9E",
                  fontSize: "25px",
                  border: "1px solid #14CE9E",
                  width: "424px",
                  height: "51px",
                  display: "flex",
                  alignItems: "center", // Center align the text vertically
                  justifyContent: "center",
                  mr: "85px", // Added border style
                  textTransform: "capitalize",
                  mt: "15px",
                  mb: "25px",
                }}
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </>
          )}
        </DialogActions>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "20px",
            mr: "30px",
          }}
        >
          <Typography>Do you have an Account</Typography>
          <NavLink sx={{ textDecoration: "none", marginLeft: "10px" }}>
            <Button
              sx={{
                textTransform: "none",
                color: "#14CE9E",
              }}
              onClick={handleLoginClick}
            >
              Sign in
            </Button>
          </NavLink>
        </div>
      </Dialog>
      {loginOpen && (
        <Login handleClose={handleLoginClose} handleOpen={handleLoginClick} />
      )}
    </div>
  );
};

export default SignUp;
