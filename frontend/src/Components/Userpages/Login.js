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
import { NavLink, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import SignUp from "./SignUp";
import axios from "axios";
import { Alert, AlertTitle } from "@mui/material";
import Swal from "sweetalert2";
import { styled, alpha } from "@mui/material/styles";

function Login(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  // State to control Login component's open state
  const handleSignUpClick = () => {
    setSignUpOpen(true);
  };
  const handleSignUpClose = () => {
    setSignUpOpen(false);
  };
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const StyledInput = styled(TextField)(({ theme }) => ({
    width: "100%", // Take up full width on all screen sizes
    maxWidth: "470px", // Limit maximum width
    marginTop: "15px",
    marginBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      // Apply styles for screens smaller than 'sm' (600px)
      maxWidth: "100%",
      marginTop: "15px",
      // Take up full width on smaller screens
    },
  }));
  const StyledBox = styled(Box)(({ theme }) => ({
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      // Apply styles for screens smaller than 'sm' (600px)
      justifyContent: "center",
    },
  }));
  const StyledButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#14CE9E",
    fontSize: "25px",
    border: "1px solid #14CE9E",
    width: "80%", // Take up full width on all screen sizes
    height: "51px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capitalize",
    mt: "25px",
    mb: "25px",
    [theme.breakpoints.down("sm")]: {
      // Apply styles for screens smaller than 'sm' (600px)
      marginRight: 0,
      maxWidth: "100%", // Take up full width on smaller screens
      // Remove right margin on smaller screens
    },
  }));

  const handleLogin = async () => {
    try {
      const userData = {
        email,
        password,
        // Add the user role if needed
      };

      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        userData
      );

      if (response && response.data) {
        // Handle successful signup
        const { email, token } = response.data;
        console.log({
          email,
          token,
        });
        history("/");
        props.handleClose();
        if (response.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success fully login",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        // Handle invalid response
        console.log("Invalid response:", response);
      }
    } catch (error) {
      // Handle signup error
      console.log("login error:", error.response.data);
    }
  };

  return (
    <div>
      <Dialog
        open={props.handleOpen} // Update prop name from props.handleOpen to props.open
        onClose={props.handleClose}
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
          WelCome Back !
        </DialogTitle>
        <DialogContent sx={{ ml: "35px" }}>
          <StyledBox component="form" noValidate autoComplete="off">
            {" "}
            <FormLabel sx={{ fontWeight: "bold" }}>Email</FormLabel>
            <div>
              <StyledInput
                label="Enter your email"
                id="outlined-size-small"
                size="small"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <FormLabel sx={{ fontWeight: "bold" }}>Password</FormLabel>
            <div>
              <StyledInput
                label="Enter your password"
                id="outlined-size-small"
                size="small"
                type={showPassword ? "text" : "password"}
                sx={{
                  width: "470px",
                  mt: "15px", // Set the desired width
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
          </StyledBox>
          <div sx={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={<Checkbox sx={{ color: "#14CE9E" }} />}
              label="Remember me"
              sx={{ marginRight: "10px" }}
            />

            <NavLink
              to="/passwordChange"
              sx={{ textDecoration: "none", marginLeft: "auto" }}
            >
              <Button
                sx={{
                  textTransform: "capitalize",
                  marginLeft: "190px",
                  color: "#14CE9E",
                }}
              >
                Forgot password
              </Button>
            </NavLink>
          </div>
        </DialogContent>
        <DialogActions>
          {" "}
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <StyledButton onClick={handleLogin}>Log in</StyledButton>
          </Box>{" "}
        </DialogActions>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "20px",
            mr: "30px", // Add margin top for spacing
          }}
        >
          <Typography>Don't have an Account</Typography>
          <NavLink sx={{ textDecoration: "none", marginLeft: "10px" }}>
            <Button
              sx={{
                textTransform: "none", // Set text transform to none
                color: "#14CE9E",
              }}
              onClick={handleSignUpClick}
            >
              Sign Up
            </Button>
          </NavLink>
        </div>
      </Dialog>

      {signUpOpen && (
        <SignUp
          handleSignClose={handleSignUpClose}
          handleSignOpen={handleSignUpClick}
        />
      )}
    </div>
  );
}

export default Login;
