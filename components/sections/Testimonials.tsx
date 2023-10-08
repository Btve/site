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
    name: "Ava",
    description:
      "Working with Beautive has been a game-changer for me! They've helped me boost my audience and earnings with their killer social media strategies. I'm overjoyed with the results!",
  },
  {
    photo: "/assets/pfp2.jpeg",
    name: "Sophia",
    description:
      "Honestly, I can't recommend Beautive enough! Their team really knows their stuff, and they've supercharged my OnlyFans growth. It's been an incredible journey!",
  },
  {
    photo: "/assets/pfp3.jpeg",
    name: "Jenny",
    description:
      "When I started on OnlyFans, I teamed up with Beautive, and it's been an epic journey. My fan base and earnings are soaring, and I'm so excited about the future!",
  },
  {
    photo: "/assets/pfp4.jpeg",
    name: "Kim",
    description:
      "Since partnering with Beautive, my content has gotten even better and i reach more fans daily. It's like they know exactly what my audience wants. It's been an incredible journey!",
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
              className="aspect-video w-full rounded-2xl max-w-[1000px]"
              pagination={{ type: "bullets" }}
              navigation={{ enabled: true }}
              spaceBetween={"100px"}
              modules={[Pagination, Navigation]}
            >
              <SwiperSlide className="bg-neutral-950 aspect-video w-full max-w-[1000px] overflow-hidden rounded-2xl md:rounded-[3rem]">
                <div className="relative aspect-video w-full max-w-[1000px]">
                  <Image alt="" className="object-contain" src={"https://i.imgur.com/SgUAMV2.jpg"} fill />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-neutral-950 aspect-video w-full max-w-[1000px] overflow-hidden rounded-2xl md:rounded-[3rem]">
                <div className="relative aspect-video w-full max-w-[1000px]">
                  <Image alt="" className="object-contain" src={"https://i.imgur.com/W3Djr2z.png"} fill />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-neutral-950 aspect-video w-full max-w-[1000px] overflow-hidden rounded-2xl md:rounded-[3rem]">
                <div className="relative aspect-video w-full max-w-[1000px]">
                  <Image alt="" className="object-contain" src={"https://i.imgur.com/7vR5nTq.png"} fill />
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
