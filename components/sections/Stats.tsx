import { motion, useInView } from "framer-motion";
import { Counter, Divider, childrenVar, parentVariant } from "../ui/utils";
import { useRef } from "react";

const StatsA: { stat: number; text: string }[] = [
  {
    stat: 1.5,
    text: "Generated Revenue",
  },
  {
    stat: 1.5,
    text: "Generated Revenue",
  },
  {
    stat: 1.5,
    text: "Generated Revenue",
  },
];

function Stats() {
  return (
    <section className="flex  w-full select-none flex-col items-center justify-start ">
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
            STATS
          </motion.span>
          <motion.h1
            variants={childrenVar("vertical", "spring")}
            className="text-center text-3xl font-semibold text-textcustom md:text-4xl lg:text-5xl"
          >
            Beautive in Numbers
          </motion.h1>
          <div className="flex w-full max-w-[900px] flex-wrap items-start justify-center gap-5">
            {StatsA.map((item, index) => (
              <motion.div
                variants={childrenVar("vertical", "spring")}
                key={index}
              >
                <StatC {...item} index={index + 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatC(props: { stat: number; text: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      className="flex h-[200px] flex-col items-center justify-center gap-5 rounded-3xl bg-white p-5 py-10 font-bold shadow-md shadow-black/20"
    >
      <span className="text-5xl">
        ${" "}
        {isInView && (
          <Counter from={0} to={1.5} duration={1.5 + props.index / 2} />
        )}{" "}
        M
      </span>
      <span className="text-2xl text-custom">{props.text}</span>
    </div>
  );
}

export default Stats;
