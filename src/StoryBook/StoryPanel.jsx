// src/StoryPanel.jsx
import React, { useState, useEffect, useRef } from 'react';
import './StoryPanel.css';

const StoryPanel = ({ title, description, images, onClose }) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const panelRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = panelRef.current.scrollTop;
    const totalHeight = panelRef.current.scrollHeight - panelRef.current.clientHeight;
    const scrollFraction = scrollPosition / totalHeight;

    const newIndex = Math.floor(scrollFraction * images.length);
    if (newIndex !== backgroundIndex) {
      setBackgroundIndex(newIndex);
      setOpacity(0); // Start fade out effect
      setTimeout(() => setOpacity(1), 300); // Fade in effect
    }
  };

  useEffect(() => {
    const panelElement = panelRef.current;
    panelElement.addEventListener('scroll', handleScroll);
    return () => panelElement.removeEventListener('scroll', handleScroll);
  }, [backgroundIndex]);

  return (
    <div
      className="story-panel"
      ref={panelRef}
      style={{
        backgroundImage: `url(${images[backgroundIndex]})`,
        opacity: opacity,
      }}
    >
      <button className="close-button" onClick={onClose}>✕</button>
      <div className="content">
        <h1>{title}</h1>
        <br></br>
        <br></br>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default StoryPanel;
