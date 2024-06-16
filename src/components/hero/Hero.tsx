import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      style={{
        width: "100%",
      }}
    >
      <Box
        minHeight="100vh"
        p={0}
        margin="auto"
        ml={{ md: 9.5, xs: "auto" }}
        display="flex"
        flexDirection="column"
        alignItems={{ md: "start", xs: "center" }}
        justifyContent="center"
        overflow="hidden"
      >
        <Typography
          fontWeight={900}
          letterSpacing={{ md: 10, xs: 1 }}
          fontSize={{ md: 150, xs: 50 }}
        >
          Moustafa
        </Typography>
        <Typography
          fontWeight={700}
          letterSpacing={{ md: 5, xs: 1 }}
          fontSize={{ md: 40, xs: 20 }}
          noWrap
        >
          Frontend developer
        </Typography>
        <Typography
          width={"70%"}
          fontWeight={200}
          letterSpacing={{ md: 3, xs: 0 }}
          fontSize={{ md: 20, xs: 16 }}
          textAlign={{ md: "start", xs: "center" }}
        >
          "Amidst the rigidity of routine, I forged a new path, embracing the
          artistry of code to sculpt digital landscapes. From the ashes of
          monotony, I rose as a Frontend Developer, weaving innovation into the
          fabric of the web, one line of code at a time."
        </Typography>
      </Box>
    </section>
  );
}