import Head from "next/head";
import NavigationBar from "@components/navigation-bar";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";

const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
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
      {/* <Footer /> */}
    </>
  );
}
