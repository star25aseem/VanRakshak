// src/components/Story.js
import React, { useState } from 'react';
import  {StoryData}  from './StoryData';
import { useSpring, animated } from 'react-spring';
import './Story.css';

const Story = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animation for slide change
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  const nextSlide = () => {
    if (currentSlide < storyData.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const { title, description, image } = StoryData[currentSlide];

  return (
    <animated.div style={fade} className="story-container">
      <div className="story-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="story-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="story-nav">
        <button onClick={prevSlide} disabled={currentSlide === 0}>Previous</button>
        <button onClick={nextSlide} disabled={currentSlide === StoryData.length - 1}>Next</button>
      </div>
    </animated.div>
  );
};

export default Story;
