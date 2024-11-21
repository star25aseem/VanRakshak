import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = ({ stories, onSelectStory }) => {
  const globeRef = useRef();

  useEffect(() => {
    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 0.5;
  }, []);

  return (
    <Globe
      ref={globeRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      labelsData={stories}
      labelLat={(story) => story.lat} 
      labelLng={(story) => story.lng} 
      labelText={(story) => {
        console.log("Label Text:", story.title); // Debugging line
        return story.title;
      }}
      labelSize={() => 1.5}
      labelDotRadius={0.8} 
      labelAltitude={0.05} 
      onLabelClick={(story) => onSelectStory(story)}
      labelColor={() => 'rgba(255, 165, 0, 0.75)'}
    />
  );
};

export default GlobeComponent;
