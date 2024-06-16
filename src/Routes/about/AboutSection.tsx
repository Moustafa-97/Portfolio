import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../../components/about/About";

export default function AboutSection() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Box  mb={10}>
        <About />
      </Box>
    </>
  );
}
