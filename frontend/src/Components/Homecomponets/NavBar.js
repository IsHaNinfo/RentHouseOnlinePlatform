import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import HouseIcon from "@mui/icons-material/House";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button";
import Login from "./../Userpages/Login";
import LoginIcon from "@mui/icons-material/Login";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  border: "1px solid #E9EFED", // Change the border color here
  "&:hover": {
    backgroundColor: "#F1F9F6",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white", // Change the background color here
  "& .MuiAppBar-root": {
    boxShadow: "none",
  },
  height: "80px",
  padding: "10px",
}));

const StyledIcon = styled(SearchIcon)(({ theme }) => ({
  color: "#CECECE",
}));
const StyledHouseIcon = styled(HouseIcon)(({ theme }) => ({
  color: "#14ce9e",
}));

const StyledLoginIcon = styled(LoginIcon)(({ theme }) => ({
  color: "#14ce9e",
}));

const StyledAddIcon = styled(AddBusinessIcon)(({ theme }) => ({
  color: "#14ce9e",
}));
const StyledLanguageIcon = styled(LanguageIcon)(({ theme }) => ({
  color: "#14ce9e",
  fontSize: "40px",
  width: "100%",
  marginRight: "30px",
}));

const StyledLogin = styled(Button)(({ theme }) => ({
  color: "#14ce9e",
  border: " 1px solid #14ce9e",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "20ch",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "#14ce9e",
    color: "white",
  },
}));

const StyledAdd = styled(Button)(({ theme }) => ({
  marginLeft: "30px",
  backgroundColor: "#14ce9e",
  border: "1px solid #14ce9e",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "20ch",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  "&:hover": {
    color: "#14ce9e",
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginOpen(true);
  };
  const handleLoginClose = () => {
    setLoginOpen(false);
  };
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <StyledLoginIcon />
        </IconButton>
        <p>Login</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <StyledAddIcon />
        </IconButton>
        <p>Add Post</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <StyledHouseIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", color: "black" } }}
          >
            All Ads
          </Typography>
          <Search>
            <SearchIconWrapper>
              <StyledIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button>
              <StyledLanguageIcon />
            </Button>
            <StyledLogin onClick={handleLoginClick}>Login</StyledLogin>
            <StyledAdd>Add Post</StyledAdd>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
      {renderMobileMenu}
      {renderMenu}
      {loginOpen && (
        <Login handleClose={handleLoginClose} handleOpen={handleLoginClick} />
      )}
    </Box>
  );
}
