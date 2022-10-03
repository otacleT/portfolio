import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "src/components/Header";
import { MantineProvider } from "@mantine/core";
import { Footer } from "src/components/Footer";
import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";
import { fetcher } from "src/lib/fetcher";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <SWRConfig value={{ fetcher }}>
        <MantineProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </MantineProvider>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default MyApp;
