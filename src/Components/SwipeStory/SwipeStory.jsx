import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./SwipeStory.css";

const SwipeStory = ({ stories = [] }) => {
  const [index, setIndex] = useState(0);

  // handle empty or undefined stories
  if (!Array.isArray(stories) || stories.length === 0) {
    return (
      <div className="swipe-story-empty">
        <p>No stories available yet.</p>
      </div>
    );
  }

  // ensure index stays within bounds
  const safeIndex = Math.min(index, stories.length - 1);
  const currentStory = stories[safeIndex];

  const nextStory = () => {
    setIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="swipe-story-container">
      <button className="swipe-btn left" onClick={prevStory}>
        <ChevronLeft />
      </button>

      <div className="swipe-story-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={safeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="story-page"
          >
            {currentStory}
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="swipe-btn right" onClick={nextStory}>
        <ChevronRight />
      </button>
    </div>
  );
};

export default SwipeStory;
