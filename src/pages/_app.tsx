import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "src/components/Header";
import { MantineProvider } from "@mantine/core";
import { Footer } from "src/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  );
}

export default MyApp;
