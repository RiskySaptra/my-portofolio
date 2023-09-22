import { useRef } from "react";
import { Stack, Box, Container, Typography, Button } from "@mui/material";

import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  height: 180,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

let experienceRef;
let projectRef;

const scrollInto = (ref) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};
function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 5, maxWidth: "45rem" }}>
      {/* <Typography variant="h5" color="white">
        Jump Into:
      </Typography> */}
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 2, sm: 2, md: 4 }}
      >
        {Array.from(Array(4)).map((_, index) => (
          <Grid xs={1} md={1} key={index}>
            <Item onClick={() => scrollInto(projectRef)}>xs=2</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function Home() {
  experienceRef = useRef(null);
  projectRef = useRef(null);

  return (
    <>
      <Stack
        sx={{
          width: "100vw",
          height: "100vh",
          position: "static",
          background: "#12486B",
          top: 0,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",

            height: "45rem",
          }}
          // sm={{ marginTop: "20rem" }}
        >
          <Stack width={1}>
            <Box
              sx={{
                maxWidth: "35rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color="white">
                {`Welcome! I'm a fullstack engineer with a passion for
                crafting web solutions. Explore my work and let's build something
                amazing together!`}
              </Typography>
            </Box>
            {/* <ResponsiveGrid /> */}

            {/* <Button onClick={() => scrollInto(experienceRef)}>scroll</Button> */}
          </Stack>
        </Container>
      </Stack>
      <Stack
        ref={experienceRef}
        sx={{
          background: "#E8E8EA",
        }}
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginY={2}
          >
            <Typography variant="h2" color="#181A2A">
              About Me
            </Typography>
          </Box>
        </Container>
      </Stack>
      <Box
        sx={{
          // height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#419197",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            maxWidth: "60rem",
            paddingY: "5rem",
          }}
        >
          <Typography variant="h6" color="white">
            {`I'm a passionate and experienced fullstack engineer dedicated to
                creating innovative web solutions. With a strong foundation in both
                front-end and back-end development, I thrive on turning ideas into
                functional and user-friendly web applications. Through this portfolio,
                you'll get a glimpse into my diverse skill set, past projects, and the
                creative problem-solving that drives my work. Explore my work, and
                feel free to reach out if you're interested in collaborating on your
                next digital venture!`}
          </Typography>
        </Container>
      </Box>
      <Stack
        ref={experienceRef}
        sx={{
          background: "#E8E8EA",
        }}
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginY={2}
          >
            <Typography variant="h2" color="#181A2A">
              Experience
            </Typography>
          </Box>
        </Container>
      </Stack>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          background: "#419197",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1">Test</Typography>
      </Box>
      <Stack
        ref={projectRef}
        sx={{
          background: "#E8E8EA",
        }}
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginY={2}
          >
            <Typography variant="h2" color="#181A2A">
              Project
            </Typography>
          </Box>
        </Container>
      </Stack>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          // background: "gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1">Test</Typography>
      </Box>
    </>
  );
}
