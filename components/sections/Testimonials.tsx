import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Divider, childrenVar, parentVariant } from "../ui/utils";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

type TestimonialT = {
  photo: string;
  name: string;
  description: string;
};

const TestimonialA: TestimonialT[] = [
  {
    photo: "/assets/pfp1.png",
    name: "Rayhan Curran",
    description:
      "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
  },
  {
    photo: "/assets/pfp2.jpeg",
    name: "Kayley Frame",
    description:
      "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
  },
  {
    photo: "/assets/pfp3.jpeg",
    name: "Gene Whitfield",
    description:
      "The most important part of the Startup Framework is the samples",
  },
  {
    photo: "/assets/pfp4.jpeg",
    name: "Allan Kim",
    description:
      "I’ve built my website with Startup just in one day, and it was ready-to-go. ",
  },
];

function Testimonials() {
  return (
    <section
      id="succes"
      className="flex min-h-screen w-full select-none flex-col items-center justify-start "
    >
      {/* <Divider /> */}
      <motion.div
        variants={parentVariant(0.5, 0.25)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex w-full flex-1 items-center justify-center p-5 md:p-10 lg:p-20"
      >
        <div className="flex w-full flex-col items-center justify-center gap-10">
          <motion.div
            className="w-full"
            variants={childrenVar("vertical", "spring")}
          >
            <Swiper
              className="aspect-video w-full max-w-[1000px]"
              pagination={{ type: "bullets" }}
              navigation={{ enabled: true }}
              spaceBetween={"100px"}
              modules={[Pagination, Navigation]}
            >
              <SwiperSlide className="aspect-video w-full max-w-[1000px] overflow-hidden rounded-2xl md:rounded-[3rem]">
                <div className="relative aspect-video w-full max-w-[1000px]">
                  <Image alt="" src={"/assets/idk123.jpeg"} fill />
                </div>
              </SwiperSlide>
              <SwiperSlide className="aspect-video w-full max-w-[1000px] overflow-hidden rounded-2xl md:rounded-[3rem]">
                <div className="relative aspect-video w-full max-w-[1000px]">
                  <Image alt="" src={"/assets/idk123.jpeg"} fill />
                </div>
              </SwiperSlide>
              <SwiperSlide className="aspect-video w-full max-w-[1000px] overflow-hidden rounded-2xl md:rounded-[3rem]">
                <div className="relative aspect-video w-full max-w-[1000px]">
                  <Image alt="" src={"/assets/idk123.jpeg"} fill />
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
          <motion.span
            className="text-center text-xs font-bold tracking-[0.4em] text-neutral-400"
            variants={childrenVar("vertical", "spring")}
          >
            TESTIMONIALS
          </motion.span>
          <motion.h1
            className="text-center text-3xl font-semibold text-textcustom md:text-4xl lg:text-5xl"
            variants={childrenVar("vertical", "spring")}
          >
            Success Stories
          </motion.h1>

          <div className="flex w-full max-w-[1000px] flex-wrap gap-5 items-stretch justify-start">
            {TestimonialA.map((item, index) => (
              <motion.div
                variants={childrenVar("vertical", "spring")}
                className=" w-full md:w-[40%] flex-auto  "
                key={index}
              >
                <TestimonialC {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TestimonialC(props: TestimonialT) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-5 rounded-md   bg-white p-5">
      <div className="relative aspect-square h-10 md:h-20 ">
        <Image
          alt=""
          src={props.photo}
          className="rounded-xl object-contain"
          fill
        ></Image>
      </div>
      <div className="flex flex-col items-center justify-start gap-5">
        <p className="max-w-[300px] w-full font-semibold">{props.description}</p>
        <span className="w-full text-sm uppercase tracking-widest text-neutral-500">
          {props.name}
        </span>
      </div>
    </div>
  );
}

export default Testimonials;
