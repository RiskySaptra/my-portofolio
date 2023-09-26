import { Typography, Stack } from "@mui/material";

const Error = () => {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        position: "fixed",
        // justifyContent: "center",
        paddingTop: 40,
        alignItems: "center",
        background: "#12486B",
      }}
    >
      <Typography variant="h2" fontFamily="poppins" color="white">
        404.
      </Typography>
      <Typography variant="h4" fontFamily="poppins" color="white">
        PAGE NOT FOUND
      </Typography>
      <Typography variant="p" fontFamily="poppins" color="white">
        The page you are looking for does not exist.
      </Typography>
    </Stack>
  );
};

export default Error;
