import Head from "next/head";
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
      <Head>
        <title>Rizky Saputra Portofolio</title>
        <meta name="description" content="my personal portofolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <Stack>{children}</Stack>
      {/* <Container fixed></Container> */}
      {/* <Footer /> */}
    </>
  );
}
