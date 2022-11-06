import React from "react";
import { Grid, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

interface AuthComponentProps {
  path: string;
  onClickPath(text: string): void;
}

const AuthComponent = ({ path, onClickPath }: AuthComponentProps) => {
  const style = {
    borderStyle: "solid",
    borderColor: "#FBC483",
    borderWidth: "thin",
    cursor: "pointer",
    py: 0.5,
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.sharp,
      duration: 200,
    }),
  };

  return (
    <Grid container sx={{ mt: 3 }}>
      <Grid
        item
        xs={6}
        onClick={() => onClickPath("Login")}
        sx={{
          ...style,
          backgroundColor: path === "Login" ? "#FBC483" : "#FFFFFF",
          color: path === "Login" ? "#FFFFFF" : "#FBC483",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Typography component="h6" variant="h6" align="center">
          Log in
        </Typography>
      </Grid>

      <Grid
        item
        xs={6}
        onClick={() => onClickPath("Sign Up")}
        sx={{
          ...style,
          backgroundColor: path === "Sign Up" ? "#FBC483" : "#FFFFFF",
          color: path === "Sign Up" ? "#FFFFFF" : "#FBC483",
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Typography component="h6" variant="h6" align="center">
          Sign Up
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AuthComponent;
