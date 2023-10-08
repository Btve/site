import { motion } from "framer-motion";
import { Divider, childrenVar, parentVariant } from "../ui/utils";
import { ReactElement } from "react";
import Link from "next/link";

type ServiceT = {
  icon: ReactElement;
  title: string;
  description: string;
  link: string;
};

const ServiceA: ServiceT[] = [
  {
    icon: (
      <svg
        width="70"
        height="103"
        viewBox="0 0 70 103"
        className="aspect-square h-20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.88 2.93182L0.851004 58.1471C-0.286746 60.1895 -0.283448 62.7177 0.859625 64.7567C2.0027 66.7958 4.10695 68.0272 6.36092 67.976H22.1193C24.1454 67.9606 26.0936 68.7944 27.5315 70.2924C28.9694 71.7904 29.7781 73.8286 29.778 75.9548V96.8267C29.7967 99.3623 31.3877 101.589 33.7019 102.319C36.0161 103.049 38.5135 102.111 39.8612 100.007L68.9535 54.2156C70.2268 52.2008 70.3468 49.6164 69.2662 47.4814C68.1856 45.3463 66.0779 44.0033 63.7742 43.9819H48.7872C44.5878 43.9819 41.1836 40.4097 41.1836 36.0032V5.82267C41.2011 3.18972 39.5211 0.876875 37.097 0.196752C34.6729 -0.48337 32.1171 0.64103 30.88 2.93182Z"
          fill="black"
        />
      </svg>
    ),
    title: "Full Management",
    description:
      "While providing space for your creativity, we handle all other aspects for you. We ensure that your content achieves the utmost impact and revenue potential.",
    link: "#contact",
  },
  {
    icon: (
      <svg
        width="90"
        height="95"
        viewBox="0 0 90 95"
        fill="none"
        className="aspect-square h-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.7857 7.86996H68.2143C76.1041 7.86996 82.5 14.5814 82.5 22.8604V71.5792C82.5 79.8582 76.1041 86.5696 68.2143 86.5696H21.7857C13.8959 86.5696 7.5 79.8582 7.5 71.5792V22.8604C7.5 14.5814 13.8959 7.86996 21.7857 7.86996ZM64.6429 51.9043C66.1222 51.9043 67.3214 50.6459 67.3214 49.0936V37.7009C67.3022 36.157 66.1142 34.9104 64.6429 34.8902H53.9286C52.4492 34.8902 51.25 36.1486 51.25 37.7009C51.25 39.2532 52.4492 40.5116 53.9286 40.5116H57.1071L44.3929 53.853L37.25 46.3578C35.3545 44.3757 32.2883 44.3757 30.3929 46.3578L21.2143 55.9892C20.1698 57.0865 20.1698 58.8643 21.2143 59.9616C21.7139 60.4924 22.3962 60.7896 23.1071 60.7861C23.8189 60.7939 24.5028 60.4961 25 59.9616L33.9643 50.9674L41.1071 58.4626C43.0026 60.4447 46.0688 60.4447 47.9643 58.4626L61.9643 43.6596V49.0936C61.9643 50.6459 63.1635 51.9043 64.6429 51.9043Z"
          fill="black"
        />
      </svg>
    ),
    title: "Account Growth",
    description:
      "We aid in building and maintaining a profitable fan base by identifying the right tools and channels and continuously adapting strategies for account growth.",
    link: "#contact",
  },
  {
    icon: (
      <svg
        width="100"
        height="105"
        viewBox="0 0 100 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="aspect-square h-20"
      >
        <path
          d="M62.2083 55.8768C62.2083 61.9136 57.5446 66.8073 51.7917 66.8073C46.0387 66.8073 41.375 61.9136 41.375 55.8768C41.375 49.8401 46.0387 44.9463 51.7917 44.9463C57.5446 44.9463 62.2083 49.8401 62.2083 55.8768Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M74.75 21.861H29.4167C24.9339 21.8494 20.631 23.7099 17.4573 27.0319C14.2836 30.354 12.5 34.8646 12.5 39.5685V69.7366C12.5 74.4405 14.2836 78.9511 17.4573 82.2732C20.631 85.5952 24.9339 87.4557 29.4167 87.4441H74.75C79.2327 87.4557 83.5357 85.5952 86.7094 82.2732C89.8831 78.9511 91.6667 74.4405 91.6667 69.7366V39.5685C91.6667 34.8646 89.8831 30.354 86.7094 27.0319C83.5357 23.7099 79.2327 21.8494 74.75 21.861ZM51.7917 73.3656C42.5869 73.3656 35.125 65.5356 35.125 55.8768C35.125 46.218 42.5869 38.388 51.7917 38.388C60.9964 38.388 68.4583 46.218 68.4583 55.8768C68.4583 60.5151 66.7024 64.9634 63.5768 68.2432C60.4512 71.523 56.2119 73.3656 51.7917 73.3656ZM74.7083 42.7602C75.8589 42.7602 76.7917 41.7814 76.7917 40.5741V36.2019C76.7917 34.9945 75.8589 34.0158 74.7083 34.0158H70.5417C69.3911 34.0158 68.4583 34.9945 68.4583 36.2019V40.5741C68.4583 41.7814 69.3911 42.7602 70.5417 42.7602H74.7083Z"
          fill="black"
        />
      </svg>
    ),
    title: "Content Creation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
    link: "#contact",
  },
];

function Service() {
  return (
    <section id="service" className="flex min-h-screen w-full select-none flex-col items-center justify-start ">
      {/* <Divider /> */}
      <motion.div
        variants={parentVariant(0.5, 0.25)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex w-full flex-1 items-center justify-center p-5 md:p-10 lg:p-20"
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <motion.span
            className="text-center text-xs font-bold tracking-[0.4em] text-neutral-400"
            variants={childrenVar("vertical", "spring")}
          >
            SERVICE
          </motion.span>
          <motion.h1
            variants={childrenVar("vertical", "spring")}
            className="text-center text-3xl font-semibold text-textcustom md:text-4xl lg:text-5xl"
          >
            Your Vision & Our Goal
          </motion.h1>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-5">
            {ServiceA.map((item, index) => (
              <motion.div
                variants={childrenVar("vertical", "spring")}
                key={index}
              >
                <ServiceC {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ServiceC(props: ServiceT) {
  return (
    <div className="flex max-w-[350px] flex-col items-center justify-center gap-2.5 rounded-3xl bg-white p-5 shadow-lg shadow-black/20">
      <motion.div variants={childrenVar("vertical", "spring")}>
        {props.icon}
      </motion.div>
      <motion.span
        className="text-center text-3xl font-bold"
        variants={childrenVar("vertical", "spring")}
      >
        {props.title}
      </motion.span>
      <motion.p
        className="mt-5 px-10 text-center"
        variants={childrenVar("vertical", "spring")}
      >
        {props.description}
      </motion.p>
      <Link
        className="rounded-md bg-custom px-6 py-2 font-semibold mt-5 text-white"
        href={`/${props.link}`}
      >
        Learn More
      </Link>
    </div>
  );
}

export default Service;
