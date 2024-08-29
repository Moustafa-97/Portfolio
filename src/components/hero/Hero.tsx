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
          letterSpacing={{ md: 5, xs: 1 }}
          fontSize={{ md: 100, xs: 30 }}
        >
          Moustafa Adel
        </Typography>
        <Typography
          fontWeight={700}
          letterSpacing={{ md: 5, xs: 1 }}
          fontSize={{ md: 30, xs: 15 }}
          noWrap
        >
          Frontend | Backend | MERN stack developer
        </Typography>
        <Typography
          width={"70%"}
          fontWeight={200}
          letterSpacing={{ md: 2, xs: 0 }}
          fontSize={{ md: 20, xs: 16 }}
          textAlign={{ md: "start", xs: "center" }}
        >
          Boost your business with MERN stack solutions, custom-built frontend,
          reliable backend, and smooth integration for optimal performance.
        </Typography>
      </Box>
    </section>
  );
}
