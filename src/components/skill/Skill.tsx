import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import BoxLayout from "../../Layout/BoxLayout";
import { FaBootstrap, FaCss3, FaHtml5, FaNodeJs, FaSass } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiMui,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import TypoLayHeader from "../../Layout/TypoLayHeader";


export default function Skill() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <BoxLayout>
        <>
          <TypoLayHeader>SKILLS</TypoLayHeader>
          <Typography
            component={"span"}
            variant="body1"
            fontWeight={400}
            letterSpacing={{ md: 2, xs: 1 }}
            fontSize={{ md: 16, xs: 16 }}
            data-aos="fade-up"
          >
            I wield a diverse skill set, proficient in JavaScript, TypeScript,
            React, Redux, HTML, CSS, and a plethora of other tools and
            technologies including Tailwind, Bootstrap, MUI, jQuery, Node.js,
            Express.js, MongoDB, and GIT/GitHub. My dedication to mastering
            these technologies ensures that I deliver high-quality web solutions
            that meet the demands of today's dynamic digital landscape.
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            flexGrow={1}
            flexWrap={"wrap"}
            textAlign={"center"}
            m={"auto"}
            width={"100%"}
            fontSize={{ md: "50px", xs: "25px" }}
            gap={2}
            data-aos="fade-up"
          >
            <Box data-aos="flip-right">
              <FaHtml5 />
            </Box>
            <Box data-aos="flip-left">
              <FaCss3 />
            </Box>
            <Box data-aos="flip-right">
              <FaBootstrap />
            </Box>
            <Box data-aos="flip-left">
              <SiTailwindcss />
            </Box>
            <Box data-aos="flip-right">
              <SiMui />
            </Box>
            <Box data-aos="flip-left">
              <SiJavascript />
            </Box>
            <Box data-aos="flip-right">
              <SiJquery />
            </Box>
            <Box data-aos="flip-left">
              <FaReact />
            </Box>
            <Box data-aos="flip-right">
              <SiRedux />
            </Box>
            <Box data-aos="flip-left">
              <FaNodeJs />
            </Box>
            <Box data-aos="flip-right">
              <SiExpress />
            </Box>
            <Box data-aos="flip-left">
              <SiMongodb />
            </Box>
            <Box data-aos="flip-right">
              <FaSass />
            </Box>
          </Box>
        </>
      </BoxLayout>
    </>
  );
}
