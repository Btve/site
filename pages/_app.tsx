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
      <Component {...pageProps} />
      <Toaster position="bottom-right" />
    </main>
  );
}
