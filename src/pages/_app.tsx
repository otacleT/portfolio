import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "src/components/Header";
import { MantineProvider } from "@mantine/core";
import { Footer } from "src/components/Footer";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MantineProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </ThemeProvider>
  );
}

export default MyApp;
