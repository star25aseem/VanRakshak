import { AxesHelper } from 'three';
import { useEffect } from 'react';
import {  useThree } from '@react-three/fiber';
  export const Axes = () => {
  const { scene } = useThree(); // Access the scene object from react-three-fiber

  useEffect(() => {
    const axesHelper = new AxesHelper(5); // Create AxesHelper with a size of 5
    scene.add(axesHelper); // Add it to the scene

    return () => {
      scene.remove(axesHelper); // Remove it when the component unmounts to prevent memory leaks
    };
  }, [scene]);

  return null; // AxesHelper doesn't need to render anything itself
};
