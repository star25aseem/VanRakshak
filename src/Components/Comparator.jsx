import React, { useState } from 'react';
import Slider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import './Comparator.css';

const ForestStory = () => {
  const [sliderPercentage, setSliderPercentage] = useState(50);

  const handlePositiveAction = () => {
    setSliderPercentage(Math.min(100, sliderPercentage + 10));
  };

  const handleNegativeAction = () => {
    setSliderPercentage(Math.max(0, sliderPercentage - 10));
  };

  return (
    <div className="forest-story-container">
      <h1>Forest Degradation and Restoration</h1>
      <div className="slider-container">
        <Slider
          before={<img src="/images/damaged-forest.webp" />}
          after={<img src="/images/restored-forest.webp" />}
          value={sliderPercentage}
          onChange={(percentage) => setSliderPercentage(percentage)}
        />
      </div>

      <div className="actions-container">
        <button onClick={handlePositiveAction} className="action-btn positive-btn">
          Plant Trees
        </button>
        <button onClick={handleNegativeAction} className="action-btn negative-btn">
          Cut Trees
        </button>
      </div>

      <p>
        Use the buttons above to make a decision:
      </p>
      <p>
        <strong>Positive action:</strong> Planting trees will help restore the forest, moving it closer to a healthy, vibrant state.
      </p>
      <p>
        <strong>Negative action:</strong> Cutting down trees or polluting the forest will worsen its condition, pushing it further into degradation.
      </p>
    </div>
  );
};

export default ForestStory;
