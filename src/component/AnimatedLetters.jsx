import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedLetters = ({ title, style }) => {
  const words = title.split(/\s+/);
  //   const description = ["mathe", "magician", "?"];

  const wordsWithSpaces = words.map((word, index) => {
    const isHighlighted = word.toLowerCase() === "mathe";

    // console.log(`Word: ${word}, IsHighlighted: ${isHighlighted}`);
    // const wordsWithoutSpace = description.map((mathe, index)=>{

    // })

    return (
      <React.Fragment key={index}>
        <motion.div
          className={`inline-block tracking-wide ${
            isHighlighted ? "magician lg:text-[4rem] " : ""
          }`}
          data-text=""
          data-mid-letter="magician?"
          key={index}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.35, duration: 0.8 }}
          style={{
            ...style,
            color: isHighlighted ? "" : "",
          }}
        >
          {word}
        </motion.div>{" "}
      </React.Fragment>
    );
  });

  return (
    <motion.div className="overflow-hidden">
      <AnimatePresence>{wordsWithSpaces}</AnimatePresence>
    </motion.div>
  );
};

export default AnimatedLetters;
