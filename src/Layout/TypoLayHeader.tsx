import { Typography } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactElement | string;
}

export default function TypoLayHeader(props: Props) {
  return (
    <Typography
      component={"span"}
      variant="body1"
      textAlign={"center"}
      m={"auto"}
      fontWeight={900}
      letterSpacing={{ md: 10, xs: 1 }}
      fontSize={{ md: 100, xs: 35 }}
    >
      {props.children}
    </Typography>
  );
}
