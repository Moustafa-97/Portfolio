import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Typography,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa";
import BoxLayout from "../../Layout/BoxLayout";
import AMITFinal from "../imgs/AMIT finalpng.png";
import MovieWorld from "../imgs/movie world.png";
import WeatherApp from "../imgs/weather.png";
import TypoLayHeader from "../../Layout/TypoLayHeader";

interface itemData {
  img: string;
  title: string;
  author: string;
  link: string;
  details: string[];
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [thisTitle, setThisTitle] = useState("");
  const [thisDetails, setThisDitails] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const itemData: itemData[] = [
    {
      img: `${AMITFinal}`,
      title: "Delivery web application",
      author: "@AMIT final project",
      link: "https://amit-final-project.onrender.com/",
      details: [
        "(Technical skills: Typescript, React, Redux, Redux toolkit, MongoDB, Node.js, Express.js, Tailwindcss.)",
        "Engineered a responsive frontend and backend.",
        "Implemented user authentication and review systems.",
        "Integrated payment gateway and order tracking system.",
        "Implemented security measures to protect 100% of user data, ensuring compliance with industry standards.",
      ],
    },

    {
      img: `${MovieWorld}`,
      title: "Movie World",
      author: "@Self Learning",
      link: "https://ourmovieworld.onrender.com/",
      details: [
        "(Technical skills: Typescript, React, Redux, Redux toolkit, MongoDB, Node.js, Express.js, Tailwindcss.)",
        "Developed a web application to browse and search for movies using TMDB API.",
        "Constructed a movie search platform.",
        "Optimized API calls to reduce data fetch time, improving application performance.",
      ],
    },
    {
      img: `${WeatherApp}`,
      title: "Weather application",
      author: "@Campus Coders",
      link: "https://campus-coder-project.vercel.app",
      details: [
        "(Technical skills: React, Redux, Redux toolkit, CSS.)",
        "Managed a web application to track weather using openWeatherMap API.",
        "Provided real-time updates and forecasts.",
        "Added features like location-based weather updates and using Google maps API.",
        "Ensured cross-browser compatibility and responsive design for optimal user experience on all screens.",
      ],
    },
  ];

  return (
    <>
      {/*  */}
      <BoxLayout>
        <>
          <TypoLayHeader>PROJECTS</TypoLayHeader>
          <Typography
            component={"span"}
            variant="body1"
            fontWeight={400}
            letterSpacing={{ md: 2, xs: 1 }}
            fontSize={{ md: 16, xs: 16 }}
            data-aos="fade-up"
          >
            Throughout my journey, I've contributed to several impactful
            projects, including a Pizza Delivery Application, a Movie Database
            Application, an E-commerce Web Application, and a Weather
            Application. These projects not only showcase my technical prowess
            but also highlight my ability to deliver tangible solutions that
            drive user engagement and satisfaction.
          </Typography>
          {/* imgs list */}
          {/* imgs container */}
          <ImageList
            data-aos="fade-up"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexGrow: 1,
              flexWrap: { xs: "wrap", md: "nowrap" },
              m: "auto",
              width: "100%",
              height: "100%",
            }}
          >
            {itemData.map((item) => (
              <>
                {/* map imgs */}
                <ImageListItem
                  key={item.img}
                  sx={{ width: { md: "30%", xs: "100%" }, cursor: "pointer" }}
                  onClick={() => {
                    setThisTitle(item.title);
                    setThisDitails(item.details);
                    handleOpen();
                  }}
                >
                  <img
                    srcSet={`${item.img}`}
                    src={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.title}`}
                      >
                        <FaLink
                          onClick={() =>
                            (window.location.href = `${item.link}`)
                          }
                        />
                      </IconButton>
                    }
                  />
                </ImageListItem>
                {/* ////Modal//// */}
                <Modal
                  key={item.author}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      key={item.author}
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      {thisTitle}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ul>
                        {thisDetails.map((detail: string) => (
                          <li>{detail}</li>
                        ))}
                      </ul>
                    </Typography>
                  </Box>
                </Modal>
              </>
            ))}
          </ImageList>
        </>
      </BoxLayout>
    </>
  );
}
