import { useFrame } from '@react-three/fiber';
import { useState, useRef } from 'react';
import { Vector3 } from 'three';
import { Deer } from '../models/Deer';
import { Tiger } from '../models/Tiger';
const spawnDistance = 20; // Distance within which trees will spawn
const deleteDistance = 25; // Distance beyond which trees will be deleted

export const FaunaGen = () => {
  const cameraPosition = useRef(new Vector3());
  const [spawnedTrees, setSpawnedTrees] = useState([]); // Store generated trees
  const treePositions = useRef([]); // Store tree positions
  const lastUpdate = useRef(0); // Use `useRef` to avoid re-renders

  // Generate random tree positions once
  if (treePositions.current.length === 0) {
    // Only generate tree positions once
    treePositions.current = Array.from({ length: 60 }, (_, index) => {
      let position;

      // Randomly select a quadrant
      const quadrant = Math.floor(Math.random() * 3); // 0 = 2nd, 1 = 3rd, 2 = 4th

      switch (quadrant) {
        case 0: // 3rd Quadrant
          position = [Math.random() * -50, 0, Math.random() * -50];
          break;
        case 1: // 4th Quadrant
          position = [Math.random() * 50, 0, Math.random() * -50];
          break;
        default:
          position = [0, 0, 0]; // Fallback
          break;
      }

      return {
        type: index % 2 === 0 ?  'Deer' : 'Tiger',
        position,
        key: `animal-${index*Math.random()}`,
      };
    });
  }

  useFrame(({ camera, clock }) => {
    const elapsedTime = clock.getElapsedTime() * 1000;

    // Throttle the update logic
    if (elapsedTime - lastUpdate.current > 500) {
      cameraPosition.current.copy(camera.position);

      // Check for spawning and deleting trees
      const newSpawnedTrees = [];

      // Only loop through unspawned trees to reduce iterations
      treePositions.current.forEach((tree) => {
        const treePosition = new Vector3(...tree.position);
        const distanceToCamera = cameraPosition.current.distanceTo(treePosition);

        // If within spawn distance and the tree is not already spawned
        if (distanceToCamera < spawnDistance && !spawnedTrees.some((t) => t.key === tree.key)) {
          newSpawnedTrees.push(tree); // Add the new tree to the list
        }
      });

      // Update state only if new trees are spawned or deleted
      if (newSpawnedTrees.length > 0 ||  spawnedTrees.length > 0) {
        setSpawnedTrees((prevTrees) =>
          prevTrees
            .filter((tree) => {
              const treePosition = new Vector3(...tree.position);
              return cameraPosition.current.distanceTo(treePosition) < deleteDistance;
            })
            .concat(newSpawnedTrees) // Add newly spawned trees
        );
      }

      // Update the last update time
      lastUpdate.current = elapsedTime;
    }
  });

  // Function to render trees based on their type
  const renderTree = (type, position, key) => {
    switch (type) {
      case 'Deer':
        return <Deer key={key} position={position} rotation={[0, Math.PI / 2, 0]} scale={[2, 2, 2]} />;
      case 'Tiger':
        return <Tiger key={key} position={position} rotation={[0, Math.PI / 2, 0]} scale={[2, 2, 2]} />;
      default:
        return null;
    }
  };

  return (
    <>
      {spawnedTrees.map((tree) => renderTree(tree.type, tree.position, tree.key))}
    </>
  );
};
