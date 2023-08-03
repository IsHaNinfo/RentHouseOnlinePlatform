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
import styled, { css } from "styled-components";
import { useMediaQuery } from "@mui/material";
import SearchBar from "./SearchBar";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [addPostOpen, setAddPostOpen] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleLoginClick = () => {
    setLoginOpen(true);
  };
  const handleLoginClose = () => {
    setLoginOpen(false);
  };
  const handleLanguageClick = () => {
    setLanguageOpen(!languageOpen);
  };
  const handleAddPostClick = () => {
    setAddPostOpen(!addPostOpen);
  };

  const AppBarContainer = styled.div`
    margin-top: 20px;
    .MuiAppBar-root {
      background-color: white;
      box-shadow: none;
    }
  `;

  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  const MainContainner = styled(Grid)`
    margin-left: ${isLargeScreen ? "5px" : "5px"};
    margin-right: ${isLargeScreen ? "5px" : "15px"};
  `;

  const LoginGrid = styled(Grid)`
    color: green;
    border: 1px solid #14ce9e;
    width: 174px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${isLargeScreen ? "15px" : "35px"};
  `;

  const PostGrid = styled(Grid)`
    background-color: #14ce9e;
    font-size: 45px;
    border: 1px solid #14ce9e;
    width: 174px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${isLargeScreen ? "5px" : "35px"};
  `;

  const StyledHouseIcon = styled(HouseIcon)`
    color: #14ce9e;
    ${(props) => css`
      font-size: ${props.fontSize || "45px"};
    `}
  `;

  const Title = styled.div`
    font-weight: bold;
    color: black;
    margin-left: ${isLargeScreen ? "5px" : "35px"};
    margin-right: ${isLargeScreen ? "5px" : "15px"};
    display: ${isLargeScreen ? "block" : "none"};
  `;

  const Input = styled(TextField)`
    width: ${isLargeScreen ? "600px" : "300px"};
    margin-top: 5px;
    margin-bottom: 5px;
    height: 60px;
    margin-right: ${isLargeScreen ? "15px" : "35px"};
    border-radius: 20px 20px;
    border: 0px solid red; /* Change border style here */
  `;

  const LoginB = styled(Button)`
    color: black;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const StyledLanguageIcon = styled(LanguageIcon)`
    color: #14ce9e;
    border: 1px solid #14ce9e;
    ${(props) => css`
      font-size: ${props.fontSize || "45px"};
    `}
  `;

  return (
    <div>
      <SearchBar />
      {/* <AppBarContainer position="static">
        <Toolbar>
          <MainContainner container alignItems="center">
            <Grid item>
              <Button>
                <StyledHouseIcon fontSize="40px" />
              </Button>
            </Grid>
            <Title>
              <Typography>All Ads</Typography>
            </Title>{" "}
            <Input
              id="outlined-size-small"
              variant="outlined"
              value={inputValue}
              onChange={handleChange}
              placeholder="Search for ads..."
              type="text"
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
              <Button onClick={handleLanguageClick}>
                <StyledLanguageIcon fontSize="40px" />
              </Button>
            </Grid>
            <LoginGrid onClick={handleLoginClick}>
              <LoginB>Log in</LoginB>
            </LoginGrid>
            <PostGrid onClick={handleAddPostClick}>
              <Button sx={{ color: "white" }}>Add Post</Button>
            </PostGrid>
          </MainContainner>
        </Toolbar>
      </AppBarContainer>

      {languageOpen && (
        <Grid
          sx={{
            backgroundColor: "#14CE9E",
            fontSize: "45px",
            border: "1px solid #14CE9E",
            width: "174px",
            height: "51px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ml: "35px",
          }}
        >
          <Button sx={{ color: "white" }}>Language</Button>
        </Grid>
      )}

      {loginOpen && (
        <Login handleClose={handleLoginClose} handleOpen={handleLoginClick} />
      )}

      {addPostOpen && (
        <Grid
          sx={{
            backgroundColor: "#14CE9E",
            fontSize: "45px",
            border: "1px solid #14CE9E",
            width: "174px",
            height: "51px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ml: "35px",
          }}
        >
          <Button sx={{ color: "white" }}>Add Post</Button>
        </Grid>
      )} */}
    </div>
  );
};

export default Home;
