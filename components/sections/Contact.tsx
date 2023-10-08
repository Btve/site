import { motion } from "framer-motion";
import { Divider, childrenVar, parentVariant } from "../ui/utils";
import Image from "next/image";
import { ContactForm } from "../ui/ContactForm";
import toast from "react-hot-toast";

function Contact() {
  return (
    <section
      id="contact"
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
          <motion.span
            className="text-center text-xs font-bold tracking-[0.4em] text-neutral-400"
            variants={childrenVar("vertical", "spring")}
          >
            LEVEL UP YOUR LIFE
          </motion.span>
          <motion.h1
            variants={childrenVar("vertical", "spring")}
            className="text-center text-3xl font-semibold text-textcustom md:text-4xl lg:text-5xl"
          >
            Let`s get in touch
          </motion.h1>
          <div className="flex w-full gap-10 flex-wrap items-center justify-center">
            <div className="relative aspect-square w-full max-w-[300px]">
              <Image alt="" src={"/assets/mailPhoto.png"} fill />
            </div>
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
