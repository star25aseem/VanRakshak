
import React, { useState, useEffect } from 'react';
import GlobeComponent from './Globe';
import StoryPanel from './StoryPanel';
import storiesData from './stories.json';

const Map = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    setStories(storiesData);
  }, []);

  const handleSelectStory = (story) => {
    setSelectedStory(story);
  };

  const handleClosePanel = () => {
    setSelectedStory(null);
  };

  return (
    <div style={{ display: 'flex' }}>
      <GlobeComponent stories={stories} onSelectStory={handleSelectStory} />
      {selectedStory && (
        <StoryPanel
          title={selectedStory.title}
          description={selectedStory.description}
          images={selectedStory.images}
          onClose={handleClosePanel}
        />
      )}
    </div>
  );
};

export default Map;
