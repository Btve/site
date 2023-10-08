import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

export function Divider() {
  return <div className="h-20 w-full"></div>;
}

export const Counter = ({
  from,
  to,
  duration,
}: {
  from: number;
  to: number;
  duration: number;
}) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => latest.toFixed(1));

  useEffect(() => {
    const controls = animate(count, to, { duration: duration, delay: 1.4 });
    return controls.stop;
  }, []);

  return <motion.span>{rounded}</motion.span>;
};

export function parentVariant(delay: number, stagger: number) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };
}

export function childrenVar(
  direction: "vertical" | "horizontal",
  animationType: "spring" | "tween",
) {
  if (direction === "vertical") {
    return {
      hidden: { y: "-30px", opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: animationType,
        },
      },
    };
  } else if (direction === "horizontal") {
    return {
      hidden: { x: "-30px", opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: animationType,
        },
      },
    };
  }
}

/* 
  Usage
  
  <parent
      variants={parentVariant(0.5, 0.25)}
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
  >
  <children variants={childrenVar("vertical", "spring")} />
  </parent>
  
  */
