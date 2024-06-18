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
          "Your work is going to fill a large part of your life, and the only
          way to be truly satisfied is to do what you believe is great work. And
          the only way to do great work is to love what you do." - Steve Jobs
        </Typography>
      </Box>
    </section>
  );
}
