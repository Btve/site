import Contact from "@/components/sections/Contact";
import Landing from "@/components/sections/Landing";
import Service from "@/components/sections/Service";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start">
      <Landing />
      <Service />
      <Testimonials />
      <Stats />
      <Contact />
    </main>
  );
}
