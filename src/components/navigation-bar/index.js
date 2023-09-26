import { cloneElement } from "react";
import {
  Slide,
  Container,
  useScrollTrigger,
  Toolbar,
  AppBar,
  Stack,
  Link,
  Hidden,
} from "@mui/material";

import NavigationLinks from "./components/navigation-page";
import CategoryNavigation from "./components/navigation-category";
import SearchField from "./components/search-field";
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

// function ElevationScroll(props) {
//   const { children } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   return cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

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
                  href="/"
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
          {route.pathname.split("/")[1] === "blog" && <CategoryNavigation />}
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
