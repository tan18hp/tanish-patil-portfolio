"use client";

import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "./ActiveSectionContext";

type Props = {
  children: ReactNode;
  id?: string;
};

export default function Reveal({ children, id }: Props) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView && id) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}