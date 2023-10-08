import Contact from "@/components/sections/Contact";
import Landing from "@/components/sections/Landing";
import Service from "@/components/sections/Service";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start">
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
      <Landing />
      <Service />
      <Testimonials />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
