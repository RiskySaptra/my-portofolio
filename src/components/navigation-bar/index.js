import { cloneElement } from "react";
import {
  Slide,
  Container,
  useScrollTrigger,
  Toolbar,
  AppBar,
  Stack,
  Box,
  Link,
  Paper,
  InputBase,
  IconButton,
  Switch,
  Hidden,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    </>
  );
}

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function NavigationBar(props) {
  const route = useRouter();
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: "#12486B", boxShadow: "none" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width={1}
              >
                <Link
                  href="/blog"
                  sx={{
                    textDecoration: "none",
                    fontSize: 30,
                    fontWeight: 600,
                    color: "#F5FCCD",
                    fontFamily: "poppins",
                  }}
                >
                  Rizky Saputra
                </Link>
                <Hidden only="xs">
                  <NavigationLinks />
                  <Stack direction="row" alignItems="center">
                    <SearchField />
                    {/* <IOSSwitch sx={{ m: 1 }} /> */}
                  </Stack>
                </Hidden>
              </Stack>
            </Toolbar>
          </Container>
          {route.pathname.split("/")[1] === "blog" && <BlogCategory />}
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}

const BlogCategory = () => {
  return (
    <Box position="relative" display="flex" py={1} backgroundColor="#419197">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" spacing={3}>
          <Typography
            sx={{
              textDecoration: "none",
              fontSize: 17,
              fontWeight: 500,
              color: "white",
              fontFamily: "poppins",
            }}
          >
            Categories :
          </Typography>
          <Link
            sx={{
              textDecoration: "none",
              fontSize: 17,
              fontWeight: 500,
              color: "white",
              fontFamily: "poppins",
            }}
            href="/"
          >
            Technology
          </Link>
          <Link
            sx={{
              textDecoration: "none",
              fontSize: 17,
              fontWeight: 500,
              color: "white",
              fontFamily: "poppins",
            }}
            href="/"
          >
            News
          </Link>
          <Link
            sx={{
              textDecoration: "none",
              fontSize: 17,
              fontWeight: 500,
              color: "white",
              fontFamily: "poppins",
            }}
            href="/"
          >
            Automotive
          </Link>
          <Link
            sx={{
              textDecoration: "none",
              fontSize: 17,
              fontWeight: 500,
              color: "white",
              fontFamily: "poppins",
            }}
            href="/"
          >
            Music
          </Link>
          <Link
            sx={{
              textDecoration: "none",
              fontSize: 17,
              fontWeight: 500,
              color: "white",
              fontFamily: "poppins",
            }}
            href="/"
          >
            Design
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#F5FCCD",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#419197" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function SearchField() {
  return (
    <Paper
      component="form"
      sx={{
        p: "1px 2px",
        display: "flex",
        alignItems: "center",
        width: 210,
        height: "30px",
        backgroundColor: "#419197",
        boxShadow: "none",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#F5FCCD", fontSize: 13 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "3px", color: "#F5FCCD" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

const NavigationLinks = () => {
  const route = useRouter();
  const pages = [
    { page: "Portofolio", href: "/" },
    { page: "Blog", href: "/blog" },
    { page: "Project", href: "/project" },
    { page: "Contact", href: "/contact" },
  ];

  return (
    <Box display="flex" gap={5}>
      {pages.map((page) => (
        <Link
          color={
            `/${route.pathname.split("/")[1]}` === page.href
              ? "#F5FCCD"
              : "#78D6C6"
          }
          key={page.page}
          href={page.href}
          underline="none"
          sx={{
            fontFamily: "poppins",
          }}
        >
          {page.page}
        </Link>
      ))}
    </Box>
  );
};
