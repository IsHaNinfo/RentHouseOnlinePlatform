import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import BasicCard from "./BasicCard";

const StyledContactGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#14CE9E",
  height: "800px",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "50px",
  marginLeft: "200px",
  marginTop: "100px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "50px",
    marginTop: "50px",
    fontSize: "40px",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  marginLeft: "200px",
  marginTop: "10px",
  textAlign: "justify",
  width: "450px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "30px",
    marginTop: "10px",
    width: "100%",
  },
}));

const StyledIconGrid = styled(Grid)(({ theme }) => ({
  marginLeft: "200px",
  marginTop: "30px",
  gap: "20px",
  fontSize: "50px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "30px",
    marginTop: "10px",
    fontSize: "40px",
  },
}));

const Contact = () => {
  const theme = useTheme();

  return (
    <StyledContactGrid>
      <Grid>
        <Title>Contact Us</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
          massa congue{" "}
        </Text>
        <Grid
          sx={{
            display: "flex",
            marginLeft: "195px",
            marginTop: "25px",
            [theme.breakpoints.down("sm")]: {
              marginLeft: "30px",
            },
          }}
        >
          <LocalPhoneIcon />
          <Typography sx={{ marginLeft: "10px" }}>+94 75 665 8562</Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            marginLeft: "195px",
            marginTop: "25px",
            [theme.breakpoints.down("sm")]: {
              marginLeft: "30px",
            },
          }}
        >
          <EmailIcon />
          <Typography sx={{ marginLeft: "10px" }}>
            renthouse@gmail.com
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            marginLeft: "195px",
            marginTop: "25px",
            [theme.breakpoints.down("sm")]: {
              marginLeft: "30px",
            },
          }}
        >
          <LocationOnIcon />
          <Typography sx={{ marginLeft: "10px" }}>
            195/9 main - Moratuwa
          </Typography>
        </Grid>
        <StyledIconGrid
          sx={{
            display: "flex",
            [theme.breakpoints.down("sm")]: {
              marginLeft: "30px",
            },
          }}
        >
          <FacebookIcon sx={{ fontSize: "40px" }} />
          <WhatsAppIcon sx={{ fontSize: "40px" }} />
          <TwitterIcon sx={{ fontSize: "40px" }} />
          <InstagramIcon sx={{ fontSize: "40px" }} />
        </StyledIconGrid>
      </Grid>
      <Grid>
        <BasicCard />
      </Grid>
    </StyledContactGrid>
  );
};

export default Contact;
