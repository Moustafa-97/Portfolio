import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import BoxLayout from "../../Layout/BoxLayout";
import TypoLayHeader from "../../Layout/TypoLayHeader";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

interface ContactProps {}

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
const styleMail = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  flexDirection: "column",
};

const Contact: React.FC<ContactProps> = () => {
  const [open, setOpen] = useState(false);
  const [thisTitle, setThisTitle] = useState<React.ReactNode>();

  // Start email handling
  const [openMail, setOpenMail] = useState(false);
  const [email, setEmail] = useState<React.ReactNode>("");

  const handleSendEmail = () => {
    const recipient = "moustafaadel097@gmail.com";
    const subject = "Email from Contact Form";
    const body = `Email: ${email}`;

    window.open(`mailto:${recipient}?subject=${subject}&body=${body}`);
  };
  // end email handling

  const handleOpen = () => setOpen(true);
  const handleOpenMail = () => setOpenMail(true);
  const handleClose = () => setOpen(false);
  const handleCloseMail = () => setOpenMail(false);

  return (
    <>
      <BoxLayout>
        <>
          <TypoLayHeader>CONTACT ME</TypoLayHeader>
          <Box
            minHeight={"25vh"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            flexGrow={1}
            flexWrap={"wrap"}
            textAlign={"center"}
            m={"auto"}
            width={"100%"}
            fontSize={{ md: "100px", xs: "25px" }}
            gap={2}
            data-aos="fade-up"
          >
            <Box
              sx={{ "&:hover": { transform: "scale(1.1, 1.1)" } }}
              data-aos="flip-right"
            >
              <FaPhoneAlt
                cursor={"pointer"}
                onClick={() => {
                  setThisTitle("+201146598154");
                  handleOpen();
                }}
              />
            </Box>
            <Box
              sx={{ "&:hover": { transform: "scale(1.1, 1.1)" } }}
              data-aos="flip-left"
            >
              <SiGmail
                cursor={"pointer"}
                onClick={() => {
                  handleOpenMail();
                }}
              />
            </Box>
            <Box
              sx={{ "&:hover": { transform: "scale(1.1, 1.1)" } }}
              data-aos="flip-right"
            >
              <FaLinkedin
                onClick={() =>
                  (window.location.href =
                    "https://linkedin.com/in/moustafa-adel-714616299")
                }
                cursor={"pointer"}
              />
            </Box>
            <Box
              sx={{ "&:hover": { transform: "scale(1.1, 1.1)" } }}
              data-aos="flip-left"
            >
              <FaGithub
                onClick={() =>
                  (window.location.href = "https://github.com/moustafa-97")
                }
                cursor={"pointer"}
              />
            </Box>

            {/* Modal for Phone Number */}
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <Typography
                  key={Math.random()}
                  id="modal-modal-title"
                  variant="h6"
                  component="span"
                  textAlign={"center"}
                  margin={"auto"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  {thisTitle}
                </Typography>
              </Box>
            </Modal>

            {/* modal for Email */}
            <Modal open={openMail} onClose={handleCloseMail}>
              <Box sx={styleMail}>
                <TextField
                  label="Email"
                  type="email"
                  multiline
                  rows={4}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  onClick={handleSendEmail}
                >
                  Send
                </Button>
              </Box>
            </Modal>
          </Box>
        </>
      </BoxLayout>
    </>
  );
};

export default Contact;
