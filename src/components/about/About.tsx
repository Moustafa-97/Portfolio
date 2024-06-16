import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import BoxLayout from "../../Layout/BoxLayout";

interface RootState {
  theme: {
    mode: string;
  };
}

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const mode: string = useSelector((state: RootState) => state.theme.mode);

  return (
    <>
      <BoxLayout>
        <Typography
          component={"span"}
          variant="body1"
          fontWeight={900}
          letterSpacing={{ md: 10, xs: 1 }}
          fontSize={{ md: 100, xs: 35 }}
          data-aos="fade-up"
        >
          I am Moustafa Adel,
        </Typography>
        <Typography
          component={"span"}
          variant="body1"
          fontWeight={300}
          letterSpacing={{ md: 2, xs: 1 }}
          fontSize={{ md: 16, xs: 16 }}
          data-aos="fade-up"
        >
          As a civil engineer, I found myself working in an unhealthy,
          repetitive environment where creativity was stifled.
        </Typography>
        <Typography
          component={"span"}
          variant="body1"
          fontWeight={300}
          letterSpacing={{ md: 2, xs: 1 }}
          fontSize={{ md: 16, xs: 16 }}
          data-aos="fade-up"
        >
          Despite considering a career change multiple times, I initially
          persevered due to a sense of obligation. However, after numerous
          attempts to adapt, I finally decided to take the plunge and explore
          other career options.
        </Typography>
        <Typography
          component={"span"}
          variant="body1"
          fontWeight={300}
          letterSpacing={{ md: 2, xs: 1 }}
          fontSize={{ md: 16, xs: 16 }}
          data-aos="fade-up"
        >
          My interest in web development stemmed from my exposure to programming
          during my first year of college. I was drawn to the logical thinking
          required in coding and found joy in creating and interacting with
          digital products. Starting with self-learning, I later pursued a
          full-stack diploma through AMIT learning, specializing in the MERN
          stack. Subsequently, I was accepted into the Digital Egypt Pioneers
          Initiative by the MCIT, where I further honed my skills in React web
          development.
        </Typography>
        <Typography
          textAlign={"center"}
          m={"auto"}
          component={"span"}
          variant="body1"
          color={mode === "dark" ? "red" : "blue"}
          fontWeight={900}
          letterSpacing={{ md: 10, xs: 1 }}
          fontSize={{ md: 50, xs: 16 }}
          data-aos="fade-up"
        >
          NOW !!!
        </Typography>
        <Typography
          component={"span"}
          variant="body1"
          fontWeight={900}
          letterSpacing={{ md: 2, xs: 1 }}
          fontSize={{ md: 24, xs: 20 }}
          data-aos="fade-up"
        >
          I am a dedicated Frontend Developer with over a year and a half of
          educational experience. My expertise lies in crafting dynamic and
          user-friendly applications using modern frameworks such as React and
          Node.js.
        </Typography>
      </BoxLayout>
    </>
  );
}
