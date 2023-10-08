import { motion } from "framer-motion";
import { Divider, childrenVar, parentVariant } from "../ui/utils";
import Image from "next/image";
import Link from "next/link";

function Landing() {
  return (
    <section className="flex min-h-screen w-full select-none flex-col items-center justify-start ">
      <Divider />
      <motion.div
        variants={parentVariant(0.5, 0.25)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex w-full flex-1 items-center justify-center   p-5 md:p-10 lg:p-20"
      >
        <div className="flex w-full max-w-[1600px] flex-col items-stretch justify-center gap-10 lg:flex-row lg:gap-0">
          <div className="flex w-full flex-col items-start justify-start gap-5  md:gap-10 xl:w-1/2">
            <motion.h1
              className=" text-4xl font-extrabold text-textcustom md:text-6xl lg:text-7xl"
              variants={childrenVar("vertical", "spring")}
            >
              Where OnlyFans Dreams Become Reality
            </motion.h1>
            <motion.p
              className=" max-w-[550px] font-semibold  md:text-2xl"
              variants={childrenVar("vertical", "spring")}
            >
              At Beautive, we're dedicated to ensuring your OnlyFans success.
              Let us help you transform your passion into profitable content.
            </motion.p>
            <motion.div
              variants={childrenVar("vertical", "spring")}
              className="flex items-center justify-center gap-2.5"
            >
              <Link
                className="rounded-md bg-custom px-4 py-2 font-semibold text-white"
                href={"/#contact"}
              >
                Get Started
              </Link>

              <Link
                className="flex items-center justify-center  font-bold"
                href={""}
              >
                <svg
                  width="50"
                  height="60"
                  viewBox="0 0 50 60"
                  className="h-10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 8C41.0232 8 50 17.4151 50 28.9987C50 40.558 41.0232 49.9731 30 49.9731C18.9768 49.9731 10 40.558 10 28.9987C10 17.4151 18.9768 8 30 8ZM27.722 20.6547C27.2973 20.6547 26.8919 20.7559 26.5058 20.9584C26.0232 21.2419 25.6371 21.6873 25.4247 22.2138C25.2896 22.5782 25.0772 23.6716 25.0772 23.6918C24.8649 24.8864 24.749 26.8302 24.749 28.9764C24.749 31.0235 24.8649 32.8842 25.0386 34.0991C25.0579 34.1193 25.2703 35.4759 25.5019 35.9416C25.9266 36.792 26.7568 37.3184 27.6448 37.3184H27.722C28.3012 37.2982 29.5174 36.7717 29.5174 36.7515C31.5637 35.8606 35.5985 33.0867 37.2201 31.2442L37.3359 31.1227C37.5483 30.9 37.8185 30.5557 37.8764 30.4748C38.1853 30.0496 38.3398 29.5231 38.3398 28.9987C38.3398 28.4095 38.166 27.8628 37.8378 27.4174C37.7606 27.3364 37.471 26.9922 37.2008 26.7087C35.6178 24.9269 31.4865 22.0113 29.3243 21.1204C28.9961 20.9807 28.166 20.675 27.722 20.6547Z"
                    fill="#5F6064"
                  />
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60V56C15.6406 56 4 44.3594 4 30C4 15.6406 15.6406 4 30 4V0Z"
                    fill="#90E0EF"
                  />
                </svg>
                Learn More
              </Link>
            </motion.div>
          </div>
          <div className="relative mt-10 flex w-full items-center justify-center p-5 xl:mt-0 xl:w-1/2">
            <motion.div
              variants={childrenVar("vertical", "spring")}
              className="absolute -top-[5%] left-0 z-[2] flex items-start justify-center gap-2.5 rounded-md bg-white px-4 py-2 pr-10 font-bold shadow-lg shadow-black/20 lg:top-0"
            >
              <svg
                width="40"
                height="43"
                viewBox="0 0 40 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.9 4.65125C26.82 5.17591 26.78 5.70057 26.78 6.22524C26.78 10.9472 30.42 14.7647 34.9 14.7647C35.4 14.7647 35.88 14.7038 36.38 14.6199V31.5539C36.38 38.6705 32.38 42.8888 25.58 42.8888H10.802C4 42.8888 0 38.6705 0 31.5539V16.026C0 8.89053 4 4.65125 10.802 4.65125H26.9ZM27.302 17.4111C26.76 17.3481 26.222 17.6 25.9 18.0617L21.062 24.6305L15.52 20.0554C15.18 19.7826 14.78 19.6755 14.38 19.7196C13.982 19.7826 13.622 20.0113 13.38 20.3471L7.462 28.429L7.34 28.6179C7 29.2874 7.16 30.1478 7.76 30.6116C8.04 30.8005 8.34 30.9264 8.68 30.9264C9.142 30.9474 9.58 30.6935 9.86 30.2968L14.88 23.5161L20.58 28.0093L20.76 28.1331C21.4 28.4899 22.2 28.3241 22.66 27.6924L28.44 19.8665L28.36 19.9085C28.68 19.4468 28.74 18.8592 28.52 18.3345C28.302 17.8098 27.82 17.4531 27.302 17.4111ZM35.1802 0.915009C37.8402 0.915009 40.0002 3.18156 40.0002 5.97277C40.0002 8.76398 37.8402 11.0305 35.1802 11.0305C32.5202 11.0305 30.3602 8.76398 30.3602 5.97277C30.3602 3.18156 32.5202 0.915009 35.1802 0.915009Z"
                  fill="black"
                />
              </svg>
              100% Business Growth
            </motion.div>
            <motion.div
              className="w-full"
              variants={childrenVar("vertical", "spring")}
            >
              <div className="relative  aspect-square w-full max-w-[600px] overflow-hidden rounded-full  bg-white shadow-lg shadow-black/20 ">
                <Image
                  alt=""
                  className="absolute left-0 top-0 z-[2]"
                  src={"/assets/femaleModel.png"}
                  fill
                />
              </div>
            </motion.div>
            {/* <div className="absolute aspect-square h-full max-h-[550px] rounded-full  bg-white shadow-lg shadow-black/20" /> */}
            <motion.div
              variants={childrenVar("vertical", "spring")}
              className="absolute -bottom-[5%] right-0 z-[2] flex flex-col items-start justify-start gap-1 rounded-md bg-white px-4 py-2 pr-14 shadow-lg shadow-black/20 lg:bottom-0  lg:left-0 lg:right-auto"
            >
              <span className="font-bold">40+ Happy Models</span>
              <div className="flex items-center justify-center gap-1">
                <svg
                  className="mt-0.5"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2759 8.7855C11.0924 8.97206 11.0081 9.24187 11.0499 9.50648L11.6796 13.1634C11.7327 13.4733 11.6081 13.787 11.3609 13.9661C11.1186 14.1519 10.7963 14.1742 10.5321 14.0256L7.39491 12.3086C7.28583 12.2477 7.1647 12.215 7.04075 12.2113H6.84879C6.7822 12.2217 6.71704 12.244 6.65754 12.2781L3.51962 14.0033C3.3645 14.085 3.18883 14.114 3.0167 14.085C2.59737 14.0018 2.31758 13.5826 2.38629 13.1403L3.0167 9.48344C3.0585 9.2166 2.9742 8.94531 2.79075 8.75577L0.232954 6.15431C0.019037 5.93653 -0.055338 5.60949 0.042412 5.31441C0.137329 5.02007 0.379579 4.80527 0.67212 4.75696L4.19254 4.22105C4.46029 4.19207 4.69545 4.02111 4.81587 3.7684L6.36712 0.431099C6.40395 0.356772 6.45141 0.28839 6.50879 0.230415L6.57254 0.178386C6.60583 0.139736 6.64408 0.107775 6.68658 0.0817602L6.76379 0.0520292L6.8842 0H7.18241C7.44875 0.0289877 7.6832 0.196224 7.80575 0.445965L9.37754 3.7684C9.49087 4.01145 9.71116 4.18017 9.96546 4.22105L13.4859 4.75696C13.7834 4.80155 14.032 5.0171 14.1305 5.31441C14.2232 5.61246 14.1432 5.9395 13.925 6.15431L11.2759 8.7855Z"
                    fill="#FEBB43"
                  />
                </svg>
                <span>4.9</span>
                <span className="text-neutral-500/70">(44 Reviews)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Landing;
