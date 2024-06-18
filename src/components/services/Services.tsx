import { Box, Typography } from "@mui/material";
import { ReactNode, useEffect } from "react";
import BoxLayout from "../../Layout/BoxLayout";
import { FaDesktop, FaServer } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import TypoLayHeader from "../../Layout/TypoLayHeader";
import { MdLayers} from "react-icons/md";
import { SiMaterialdesign } from "react-icons/si";

interface Service {
  logo: ReactNode;
  color: string;
  details: string;
}

const services: Service[] = [
  {
    logo: <MdLayers />,
    color: "red",
    details: "MERN Stack Development",
  },
  {
    logo: <FaDesktop />,
    color: "black",
    details: "Frontend Development",
  },
  {
    logo: <FaServer />,
    color: "blue",
    details: "Backend Development",
  },
  {
    logo: <SiMaterialdesign />,
    color: "red",
    details: "Implementing UI/UX designs",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <BoxLayout>
        <>
          <TypoLayHeader>SERVICES</TypoLayHeader>
          <Typography
            data-aos="fade-up"
            component={"span"}
            variant="body1"
            fontWeight={400}
            letterSpacing={{ md: 2, xs: 1 }}
            fontSize={{ md: 16, xs: 16 }}
          >
            Offers a range of services tailored to meet the needs of clients in
            the web development sphere
          </Typography>
          <Typography
            component={"span"}
            variant="body1"
            fontWeight={400}
            letterSpacing={{ md: 2, xs: 1 }}
            fontSize={{ md: 16, xs: 16 }}
            data-aos="fade-up"
          >
            Frontend Development: Specialized in crafting dynamic and
            user-friendly frontend interfaces using technologies such as React,
            Redux, TypeScript, HTML, CSS, and modern CSS frameworks like
            Tailwind and Bootstrap.
          </Typography>
          <Typography
            component={"span"}
            variant="body1"
            fontWeight={400}
            letterSpacing={{ md: 2, xs: 1 }}
            fontSize={{ md: 16, xs: 16 }}
            data-aos="fade-up"
          >
            Full Stack Development: proficiencent in both frontend and backend
            technologies including Node.js, Express.js, and MongoDB.
          </Typography>
          <Typography
            component={"span"}
            variant="body1"
            fontWeight={400}
            letterSpacing={{ md: 2, xs: 1 }}
            fontSize={{ md: 16, xs: 16 }}
            data-aos="fade-up"
          >
            Web Application Development: Ability to build custom web
            applications tailored to specific requirements, ensuring
            responsiveness, scalability, and intuitive user interfaces.
          </Typography>
          <Typography
            component={"span"}
            variant="body1"
            fontWeight={400}
            letterSpacing={{ md: 2, xs: 1 }}
            fontSize={{ md: 16, xs: 16 }}
            data-aos="fade-up"
          >
            API Development: Can develop robust and efficient RESTful APIs to
            facilitate seamless communication between frontend and backend
            systems.
          </Typography>
          <Typography
            component={"span"}
            variant="body1"
            fontWeight={400}
            letterSpacing={{ md: 2, xs: 1 }}
            fontSize={{ md: 16, xs: 16 }}
            data-aos="fade-up"
          >
            Multilingual Support: Fluent in English, Arabic, and French, so I
            can develop web applications with multilingual support, catering to
            diverse audiences and markets.
          </Typography>
          {/* services */}
          <Box m={"auto"} width={"100%"} data-aos="fade-up">
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              m={"auto"}
              flexGrow={1}
              flexWrap={{ md: "nowrap", xs: "wrap" }}
              gap={2}
            >
              {services.map((service) => (
                <Box
                  width={"100%"}
                  height={"30vh"}
                  m={"auto"}
                  textAlign={"center"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={5}
                  flexDirection="column"
                  borderRadius="10px"
                  key={service.details}
                  sx={{
                    textWrap: "wrap",
                    color: "text.primary",
                    cursor: "pointer",
                    transition: "400ms",
                    backgroundColor: "divider",
                    "&:hover": { transform: "scale(1.1, 1.1)" },
                  }}
                >
                  <Typography
                    bgcolor={"divider"}
                    width={"100%"}
                    height={"70%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    textAlign={"center"}
                    component={"p"}
                    m={"auto"}
                    sx={{ fontSize: 50 }}
                  >
                    {service.logo}
                  </Typography>
                  <Typography
                    height={"30%"}
                    width={"100%"}
                    component={"p"}
                    m={"auto"}
                    sx={{ fontSize: 20 }}
                  >
                    {service.details}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </>
      </BoxLayout>
    </>
  );
}
