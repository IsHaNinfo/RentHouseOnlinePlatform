import React, { useState } from "react";
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import Login from "../Userpages/Login";
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [loginOpen, setLoginOpen] = useState(false); // State to control Login component's open state

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleLoginClick = () => {
    setLoginOpen(true); // Open the Login component when the login button is clicked
  };
  const handleLoginClose = () => {
    setLoginOpen(false); // Close the Login component
  };
  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "none", mt: "15px" }}
      >
        <Toolbar>
          <Grid container alignItems="center" sx={{ ml: "35px", mr: "15px" }}>
            <Grid item>
              <Button>
                <HouseIcon sx={{ color: "#14CE9E", fontSize: "45px" }} />
              </Button>
            </Grid>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "black",
                fontSize: "25px",
                ml: "35px",
                mr: "35px",
              }}
            >
              All Ads
            </Typography>
            <TextField
              id="outlined-size-small"
              variant="outlined"
              value={inputValue}
              onChange={handleChange}
              placeholder="Search for ads..."
              type="text"
              sx={{
                width: "600px",
                mt: "5px",
                mb: "5px",
                height: "60px",
                mr: "35px",
              }} // Adjusted height
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Grid sx={{ mr: "45px" }}>
              <Button>
                <LanguageIcon
                  sx={{
                    color: "#14CE9E",
                    fontSize: "45px",
                    border: "1px solid #14CE9E", // Added border style
                  }}
                />
              </Button>
            </Grid>
            <Grid
              onClick={handleLoginClick}
              sx={{
                color: "green",
                fontSize: "45px",
                border: "1px solid #14CE9E",
                width: "174px",
                height: "51px",
                display: "flex",
                alignItems: "center", // Center align the text vertically
                justifyContent: "center",
                mr: "35px", // Added border style
              }}
            >
              <Button sx={{ color: "black" }}>Log in</Button>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "#14CE9E",
                fontSize: "45px",
                border: "1px solid #14CE9E",
                width: "174px",
                height: "51px",
                display: "flex",
                alignItems: "center", // Center align the text vertically
                justifyContent: "center",
                ml: "35px", // Center align the text horizontally
              }}
            >
              <Button sx={{ color: "white" }}>Add Post</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {loginOpen && (
        <Login handleClose={handleLoginClose} handleOpen={handleLoginClick} />
      )}
    </div>
  );
};

export default Home;
