import { useDispatch } from "react-redux";
import { setMode } from "../../Redux/Tools/ThemeMode";
import useThemeDetector from "../../hooks/useThemeDetector";
import {
  AppBar,
  Box,
  CssBaseline,
  Fab,
  Fade,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
// import Cyclone from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useNavigate } from "react-router";
import { Cyclone, GitHub, LinkedIn } from "@mui/icons-material";

const pages = ["About", "Projects", "Services", "Contact"];

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function Header(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [
    anchorElOption,
    setAnchorElOption,
  ] = React.useState<null | HTMLElement>(null);

  const [isDarkTheme, toggleTheme] = useThemeDetector();
  const handleMode = async () => {
    await toggleTheme();
    return isDarkTheme ? dispatch(setMode("light")) : dispatch(setMode("dark"));
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenOptionMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElOption(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseOptionMenu = () => {
    setAnchorElOption(null);
  };

  const options = [
    isDarkTheme ? (
      <LightModeIcon sx={{ cursor: "pointer" }} onClick={() => handleMode()} />
    ) : (
      <DarkModeIcon
        sx={{ cursor: "pointer" }}
        onClick={() => handleMode()}
      />
    ),
    <LinkedIn
      onClick={() =>
        (window.location.href =
          "https://linkedin.com/in/moustafa-adel-714616299")
      }
    />,
    <GitHub
      onClick={() => (window.location.href = "https://github.com/moustafa-97")}
    />,
  ];

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <AppBar sx={{ px: 4 }}>
          <Toolbar disableGutters>
            {/* logo md */}
            <Cyclone
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                cursor: "pointer",
              }}
              onClick={() => navigate("/", { replace: true })}
            />
            <Typography
              onClick={() => navigate("/", { replace: true })}
              variant="body1"
              noWrap
              component="a"
              sx={{
                cursor: "pointer",
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Moustafa
            </Typography>
            {/* menu xs */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current Option"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      navigate(`/${page.toLowerCase()}`);
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* logo xs */}
            <Cyclone
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              onClick={() => navigate("/", { replace: true })}
            />
            <Typography
              onClick={() => navigate("/", { replace: true })}
              variant="body1"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Moustafa
            </Typography>
            {/* menu md */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    navigate(`/${page.toLowerCase()}`);
                    handleCloseNavMenu;
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* options md & xs*/}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Options">
                <IconButton onClick={handleOpenOptionMenu} sx={{ p: 1 }}>
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElOption}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElOption)}
                onClose={handleCloseOptionMenu}
              >
                {options.map((option) => (
                  <MenuItem
                    key={Math.random()}
                    onClick={() => {
                      handleCloseOptionMenu;
                    }}
                  >
                    <Typography textAlign="center">{option}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        {/* the website children */}
        <Toolbar id="back-to-top-anchor" />
        <div
          style={{
            minHeight: "100vh",
            width: "100%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: 0,
            overflowX: "hidden",
            overflowY: "hidden",
          }}
        >
          {props.children}
        </div>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    </>
  );
}
