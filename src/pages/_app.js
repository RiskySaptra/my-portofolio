import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavigationBar from "@components/navigation-bar";

import "../styles/globals.css";
import { Container, Stack } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <Container fixed>
        <Stack marginTop={5}>{children}</Stack>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
