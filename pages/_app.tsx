import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`text-black ${montserrat.className} flex w-full flex-col items-center justify-start font-sans`}
    >
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Beautive Agency | OnlyFans Management</title>
        <meta property="og:title" content={"Beautive Agency"} />
        <meta property="og:type" content="website"></meta>
        <meta
          name="description"
          content={`OnlyFans Management`}
        />
        <meta
          property="og:description"
          content={`OnlyFans Management`}
        />
        <meta property="og:site_name" content={`Beautive Agency`} />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
}
