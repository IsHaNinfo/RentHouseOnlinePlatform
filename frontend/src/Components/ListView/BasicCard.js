/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const StyledContactCard = styled(Card)(({ theme }) => ({
  minWidth: "465px",
  marginTop: "120px",
  marginLeft: "155px",
}));

const StyleCard = styled(CardContent)(({ theme }) => ({
  marginTop: "20px",
  marginLeft: "25px",
}));
export default function BasicCard() {
  return (
    <StyledContactCard>
      <StyleCard>
        <TextField
          sx={{ width: "380px" }}
          id="outlined-basic"
          label=""
          variant="outlined"
        />
      </StyleCard>
      <StyleCard>
        <TextField
          sx={{ width: "380px" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
      </StyleCard>
      <StyleCard>
        <TextField
          sx={{ width: "380px" }}
          id="outlined-basic"
          label="Message"
          variant="outlined"
        />
      </StyleCard>
      <CardActions>
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
            ml: "105px",
            textTransform: "capitalize",
            mt: "15px",
            mb: "25px",
          }}
        >
          Submit
        </Button>
      </CardActions>
    </StyledContactCard>
  );
}
