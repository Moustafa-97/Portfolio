import React, { useEffect, useState } from "react";
import BoxLayout from "../../Layout/BoxLayout";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Typography,
} from "@mui/material";
import { FaInfo } from "react-icons/fa";
import Depi from "../imgs/digital_egypt_pioneers_initiative_depi_logo.jpeg";
import Amit from "../imgs/images.png";
import Feau from "../imgs/2016_2_5_11_51_30_591.jpg";
import TypoLayHeader from "../../Layout/TypoLayHeader";

interface RootState {
  theme: {
    mode: string;
  };
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

export default function Education() {
  const [open, setOpen] = useState(false);
  const [thisTitle, setThisTitle] = useState("");
  const [thisDetails, setThisDitails] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const mode: string = useSelector((state: RootState) => state.theme.mode);

  const itemData = [
    {
      img: `${Depi}`,
      title: "React web development",
      author: "@MCIT",
      link: "https://depi.gov.eg",
      details: [
        "Introduction to Cloud Computing",
        "Introduction to Web Development with HTML, CSS, JavaScript",
        "Getting Started with Git and GitHub",
        "Developing Front-End Apps with React",
        "Developing Web Applications with Python and Flask",
        "Introduction to Containers w/ Docker, Kubernetes",
        "Application Development using Microservices and Serverless",
        "Full Stack Web Development Project",
      ],
    },

    {
      img: `${Amit}`,
      title: "MERN Stack Diploma",
      author: "@AMIT learning",
      link: "https://amit-learning.com",
      details: [
        "HTML- CSS- JS Basic- JQUERY- BOOTSTRAP",
        "React as a Front-end frame work",
        "Frontend Framework Practice",
        "Nodejs and MongoDB",
        "Expressjs as a Back-end-end frame work",
        "UI & UX principles",
        "Git/GitHub principles",
        "Full Stack Web Development Project",
      ],
    },
    {
      img: `${Feau}`,
      title: "Bachelor's Degree",
      author: "@Faculty of Engineering",
      link: "https://eng.alexu.edu.eg/index.php/en",
      details: [],
    },
  ];

  return (
    <>
      <BoxLayout>
        <>
          <TypoLayHeader>EDUCATION</TypoLayHeader>
          <Typography
            component={"span"}
            variant="body1"
            fontWeight={400}
            letterSpacing={{ md: 2, xs: 1 }}
            fontSize={{ md: 16, xs: 16 }}
          >
            I am currently enrolled in the React Web Developer Program under the
            Digital Egypt Pioneers Initiative by MCIT, where I am expanding my
            knowledge and expertise in cloud computing and web development.
            Prior to this, I completed a MERN stack Diploma at AMIT Learning,
            where I honed my skills through rigorous projects and collaborative
            learning environments. Additionally, I hold a Bachelor's degree in
            Engineering from Alexandria University.
          </Typography>
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
                <ImageListItem
                  key={item.img}
                  sx={{ width: { md: "30%", xs: "100%" }, cursor: "pointer" }}
                  onClick={() => {
                    console.log(item.title);
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
                        <FaInfo
                          onClick={() =>
                            (window.location.href = `${item.link}`)
                          }
                        />
                      </IconButton>
                    }
                  />
                </ImageListItem>
                {/* //////// */}
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
