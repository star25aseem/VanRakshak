import React, { useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { Html } from '@react-three/drei';  // Import Html from drei


export function EntryCircle(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF('/EntryCircles-transformed.glb');
  const { actions } = useAnimations(animations, group);

  // State to control scrollbar visibility
  const [showScrollbar, setShowScrollbar] = useState(false);

  useFrame((state) => {
    group.current.position.y = Math.abs(Math.sin(state.clock.elapsedTime) * 0.5 + props.position[1]);
  });

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
            <mesh
              name="Cylinder073"
              geometry={nodes.Cylinder073.geometry}
              material={materials.Entrycircle_neon}
              scale={[2, 0.75, 2]}
            />
        </group>
      </group>

      {/* Use Html for HTML elements */}
      
    </>
  );
}

useGLTF.preload('/EntryCircles-transformed.glb');
