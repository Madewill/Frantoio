import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { useFrame } from '@react-three/fiber';

export default function SeedModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./assets/models/seed.glb');
  const { actions } = useAnimations(animations, group);

  // Determine if the screen is a mobile device
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Set different values for position, scale, and rotation based on screen size
  const position = isMobile ? [0, 0, 0] : [5, -1, 0];
  const scale = isMobile ? [6.5, 6.5, 6.5] : [4, 4, 4];
  const rotation = isMobile ? [0, 0, 0] : [0, 0, 0];

  // Add rotation animation
  useFrame(() => {
    group.current.rotation.y += 0.01; // Adjust the speed as needed
  });

  return (
    <group ref={group} {...props} dispose={null} position={position} scale={scale} rotation={rotation}>
    <group name="Scene">
      <group name="Light" position={[-1.437, 0.468, 0.686]} rotation={[-1.532, -0.841, -1.572]} scale={16.711} />
      <group name="Light001" position={[2.329, 0.534, -0.523]} rotation={[-1.722, 1.213, -1.725]} scale={144.807} />
      <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Stylized Wood.001']} />
    </group>
  </group>
  );
}

useGLTF.preload('./assets/models/seed.glb');
