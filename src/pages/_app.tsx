import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "src/components/Header";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Header />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
