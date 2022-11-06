import React from "react";
import { Link, Typography } from "@mui/material";

const Copyright = ({ sx }: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={sx}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Fathurrachman D. Saputra
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
