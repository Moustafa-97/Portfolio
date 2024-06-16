import { Box } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactElement;
}

export default function BoxLayout(props: Props) {
  return (
    <Box
      height={"100%"}
      component="section"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"start"}
      justifyContent={"space-arround"}
      flexGrow={1}
      gap={3}
      m={"auto"}
      width={"95%"}
      p={4}
      data-aos="fade-up"
      overflow={"hidden"}
      position={"relative"}
    >
      {props.children}
    </Box>
  );
}
