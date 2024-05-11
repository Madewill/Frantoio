import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { useFrame } from '@react-three/fiber';

export default function ColdpresserModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./assets/models/step5.glb');
  const { actions } = useAnimations(animations, group);

  // Determine if the screen is a mobile device
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Set different values for position, scale, and rotation based on screen size
  const position = isMobile ? [0, 0, 0] : [5, -1, 0];
  const scale = isMobile ? [6.5, 6.5, 6.5] : [1, 1, 1];
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
        <mesh name="Bolt001" geometry={nodes.Bolt001.geometry} material={materials['Brushed Steel Procedural']} position={[1.342, 2.1, -0.624]} rotation={[-Math.PI, 1.571, 0]} scale={[41.839, 187.367, 41.839]} />
        <mesh name="Bolt002_dmg" geometry={nodes.Bolt002_dmg.geometry} material={materials['Stylized Tree Truck']} position={[1.329, -0.026, -0.649]} rotation={[0, -Math.PI / 2, 0]} scale={0.463} />
        <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Net 5']} position={[1.329, -0.097, -0.649]} rotation={[0, -Math.PI / 2, 0]} scale={0.463} />
        <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Stylized wood']} position={[2.142, -0.263, -0.649]} rotation={[0, -Math.PI / 2, 0]} scale={0.234} />
        <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Stylized Tree Truck']} position={[1.329, -0.043, -0.649]} rotation={[0, -Math.PI / 2, 0]} scale={0.463} />
        <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['Stylized Bricks']} position={[1.341, 0.759, -0.624]} rotation={[0, -Math.PI / 2, 0]} scale={0.463} />
        <mesh name="Cylinder002_dmg" geometry={nodes.Cylinder002_dmg.geometry} material={materials['Stylized Ground']} position={[1.329, -0.043, -0.649]} rotation={[0, -Math.PI / 2, 0]} scale={0.463} />
        <mesh name="Cylinder004_dmg" geometry={nodes.Cylinder004_dmg.geometry} material={materials['Coarse sand']} position={[1.325, -0.087, -0.652]} rotation={[0, -Math.PI / 2, 0]} scale={0.463} />
        <group name="Cylinder005_dmg" position={[1.329, -0.043, -0.649]} rotation={[0, -Math.PI / 2, 0]} scale={0.463}>
          <mesh name="Cylinder005_dmg_1" geometry={nodes.Cylinder005_dmg_1.geometry} material={materials['Brushed Steel Procedural']} />
          <mesh name="Cylinder005_dmg_2" geometry={nodes.Cylinder005_dmg_2.geometry} material={materials['bark.001']} />
        </group>
        <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials.Material} position={[2.142, -0.263, -0.649]} rotation={[0, -Math.PI / 2, 0]} scale={0.234} />
        <mesh name="Cylinder004_dmg001" geometry={nodes.Cylinder004_dmg001.geometry} material={materials['Coarse sand']} position={[1.325, -0.087, -0.652]} rotation={[0, -Math.PI / 2, 0]} scale={0.463} />
        <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials['Stylized Concrete']} position={[1.329, -0.097, -0.649]} rotation={[0, -Math.PI / 2, 0]} scale={0.463} />
        <mesh name="Bolt002" geometry={nodes.Bolt002.geometry} material={materials['Brushed Steel Procedural']} position={[1.342, 2.1, -0.624]} rotation={[-Math.PI, 1.571, 0]} scale={[41.839, 187.367, 41.839]} />
        <mesh name="Cylinder005_dmg001" geometry={nodes.Cylinder005_dmg001.geometry} material={materials.Material} position={[1.931, -0.006, -0.649]} rotation={[0, -Math.PI / 2, 0]} scale={0.097} />
      </group>
    </group>
  )
}

useGLTF.preload('./assets/models/step5.glb');
