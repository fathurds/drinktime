import React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: "#FBC483",
  borderColor: "#FBC483",
  "&:hover": {
    backgroundColor: "#FBC483",
    color: "white",
    borderColor: "white",
  },
  "&:disabled": {
    backgroundColor: "white",
    color: "#FBC483",
    borderColor: "#FBC483",
    opacity: 0.5,
  },
}));

interface ButtonAuthProps {
  label: string;
  disabled?: boolean;
}

const ButtonAuth = ({ label, disabled }: ButtonAuthProps) => {
  return (
    <ColorButton
      type="submit"
      fullWidth
      variant="outlined"
      sx={{ mt: 3, mb: 2 }}
      disabled={disabled}
    >
      {label}
    </ColorButton>
  );
};

export default ButtonAuth;
