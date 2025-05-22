import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = [
  "Quant Systematic",
  "Unlocking Algorithmic Alpha",
  "Data-Driven Strategies",
];

const TypingRollText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500); //Change every 1 second

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden h-[9.8vw] sm:h-[4.8vw]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ position: "absolute", color: "#53e27b", textWrap: "nowrap" }}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default TypingRollText;
