import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { useFrame } from '@react-three/fiber';

export default function HarvestModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./assets/models/harvest.glb');
  const { actions } = useAnimations(animations, group);

  // Determine if the screen is a mobile device
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Set different values for position, scale, and rotation based on screen size
  const position = isMobile ? [0, 0, 0] : [5, -1, 0];
  const scale = isMobile ? [6.5, 6.5, 6.5] : [10, 10, 10];
  const rotation = isMobile ? [0, 0, 0] : [0, 0, 0];

  // Add rotation animation
  useFrame(() => {
    group.current.rotation.y += 0.01; // Adjust the speed as needed
  });

  return (
    <group ref={group} {...props} dispose={null} position={position} scale={scale} rotation={rotation}>
      <group name="Scene">
        <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials['Stylized Concrete']} position={[0.043, 1.732, -0.221]} rotation={[-0.773, -0.143, -0.19]} scale={[0.005, 0.007, 0.005]} />
        <mesh name="Sphere002" geometry={nodes.Sphere002.geometry} material={materials['Stylized Concrete']} position={[0.041, 1.839, -0.194]} rotation={[-0.608, 0.753, -0.539]} scale={[0.004, 0.005, 0.004]} />
        <mesh name="Sphere003" geometry={nodes.Sphere003.geometry} material={materials['Stylized Concrete']} position={[0.04, 1.899, -0.214]} rotation={[0.16, -0.258, -1.354]} scale={[0.004, 0.006, 0.004]} />
        <mesh name="Sphere004" geometry={nodes.Sphere004.geometry} material={materials['Stylized Concrete']} position={[0.043, 2.472, -0.221]} rotation={[-0.028, -0.521, -1.24]} scale={[0.005, 0.007, 0.005]} />
        <mesh name="Sphere005" geometry={nodes.Sphere005.geometry} material={materials['Stylized Concrete']} position={[0.041, 2.579, -0.194]} rotation={[-0.06, 0.514, 1.689]} scale={[0.005, 0.007, 0.005]} />
        <mesh name="Sphere006" geometry={nodes.Sphere006.geometry} material={materials['Stylized Concrete']} position={[0.04, 2.639, -0.214]} rotation={[-2.744, 1.566, 1.175]} scale={[0.004, 0.006, 0.004]} />
        <mesh name="Sphere007" geometry={nodes.Sphere007.geometry} material={materials['Stylized Concrete']} position={[-0.002, 2.486, -0.086]} rotation={[0.125, 0.012, -0.701]} scale={[0.005, 0.007, 0.005]} />
        <mesh name="Sphere008" geometry={nodes.Sphere008.geometry} material={materials['Stylized Concrete']} position={[-0.004, 2.593, -0.059]} rotation={[0.295, 0.292, 0.316]} scale={[0.004, 0.006, 0.004]} />
        <mesh name="Sphere009" geometry={nodes.Sphere009.geometry} material={materials['Stylized Concrete']} position={[-0.005, 2.653, -0.079]} rotation={[-2.169, 0.712, 1.031]} scale={[0.005, 0.007, 0.005]} />
        <mesh name="Sphere010" geometry={nodes.Sphere010.geometry} material={materials['Stylized Concrete']} position={[-0.048, 2.971, -0.234]} rotation={[0.998, 1.017, -0.056]} scale={[0.005, 0.007, 0.005]} />
        <mesh name="Sphere011" geometry={nodes.Sphere011.geometry} material={materials['Stylized Concrete']} position={[-0.05, 3.078, -0.208]} rotation={[-0.052, 0.521, -1.627]} scale={[0.005, 0.007, 0.005]} />
        <mesh name="Sphere012" geometry={nodes.Sphere012.geometry} material={materials['Stylized Concrete']} position={[-0.051, 3.138, -0.228]} rotation={[-0.567, -0.259, -1.123]} scale={[0.004, 0.005, 0.004]} />
        <mesh name="Sphere115" geometry={nodes.Sphere115.geometry} material={materials['Stylized Concrete']} position={[0.046, 2.579, -0.221]} rotation={[0.163, -0.967, 1.16]} scale={[0.003, 0.005, 0.003]} />
        <mesh name="Sphere117" geometry={nodes.Sphere117.geometry} material={materials['Stylized Concrete']} position={[0.045, 2.639, -0.241]} rotation={[0.884, 0.422, -0.107]} scale={[0.005, 0.008, 0.005]} />
        <mesh name="Sphere139" geometry={nodes.Sphere139.geometry} material={materials['Stylized Concrete']} position={[-0.045, 3.078, -0.234]} rotation={[1.064, -1.047, -0.052]} scale={[0.005, 0.008, 0.005]} />
        <mesh name="Sphere169" geometry={nodes.Sphere169.geometry} material={materials['Stylized Concrete']} position={[0.007, 3.629, -0.222]} rotation={[-0.636, -0.861, 0.945]} scale={[0.004, 0.006, 0.004]} />
        <mesh name="Sphere195" geometry={nodes.Sphere195.geometry} material={materials['Stylized Concrete']} position={[0.032, 3.969, -0.285]} rotation={[0.07, 0.139, 1.131]} scale={[0.003, 0.005, 0.003]} />
        <mesh name="Sphere364" geometry={nodes.Sphere364.geometry} material={materials['Stylized Concrete']} position={[0.076, 2.639, -0.222]} rotation={[-0.097, -0.442, 1.333]} scale={[0.004, 0.006, 0.004]} />
        <mesh name="Sphere366" geometry={nodes.Sphere366.geometry} material={materials['Stylized Concrete']} position={[0.032, 2.593, -0.067]} rotation={[0.794, 0.368, 0.487]} scale={[0.005, 0.007, 0.005]} />
        <mesh name="Sphere367" geometry={nodes.Sphere367.geometry} material={materials['Stylized Concrete']} position={[0.031, 2.653, -0.087]} rotation={[0.522, -0.098, -1.304]} scale={[0.004, 0.006, 0.004]} />
        <mesh name="Sphere374" geometry={nodes.Sphere374.geometry} material={materials['Stylized Concrete']} position={[0.063, 3.969, -0.266]} rotation={[-0.01, -0.901, -1.581]} scale={[0.003, 0.005, 0.003]} />
        <mesh name="Sphere899" geometry={nodes.Sphere899.geometry} material={materials['Stylized Concrete']} position={[-0.073, 0.28, -0.213]} rotation={[-1.967, -Math.PI / 2, 0]} scale={[0.006, 0.009, 0.006]} />
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Stylized wood']} position={[0.005, 0.13, -0.187]} scale={[1.023, 1, 1.023]} />
      </group>
    </group>
  );
}

useGLTF.preload('./assets/models/harvest.glb');



































/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/harvest.glb 
*/

// import React, { useRef } from 'react'
// import { useGLTF, useAnimations } from '@react-three/drei'

// export default function HarvestModel(props) {
//   const group = useRef()
//   const { nodes, materials, animations } = useGLTF('/harvest.glb')
//   const { actions } = useAnimations(animations, group)
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Scene">
//         <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials['Stylized Concrete']} position={[0.043, 1.732, -0.221]} rotation={[-0.773, -0.143, -0.19]} scale={[0.005, 0.007, 0.005]} />
//         <mesh name="Sphere002" geometry={nodes.Sphere002.geometry} material={materials['Stylized Concrete']} position={[0.041, 1.839, -0.194]} rotation={[-0.608, 0.753, -0.539]} scale={[0.004, 0.005, 0.004]} />
//         <mesh name="Sphere003" geometry={nodes.Sphere003.geometry} material={materials['Stylized Concrete']} position={[0.04, 1.899, -0.214]} rotation={[0.16, -0.258, -1.354]} scale={[0.004, 0.006, 0.004]} />
//         <mesh name="Sphere004" geometry={nodes.Sphere004.geometry} material={materials['Stylized Concrete']} position={[0.043, 2.472, -0.221]} rotation={[-0.028, -0.521, -1.24]} scale={[0.005, 0.007, 0.005]} />
//         <mesh name="Sphere005" geometry={nodes.Sphere005.geometry} material={materials['Stylized Concrete']} position={[0.041, 2.579, -0.194]} rotation={[-0.06, 0.514, 1.689]} scale={[0.005, 0.007, 0.005]} />
//         <mesh name="Sphere006" geometry={nodes.Sphere006.geometry} material={materials['Stylized Concrete']} position={[0.04, 2.639, -0.214]} rotation={[-2.744, 1.566, 1.175]} scale={[0.004, 0.006, 0.004]} />
//         <mesh name="Sphere007" geometry={nodes.Sphere007.geometry} material={materials['Stylized Concrete']} position={[-0.002, 2.486, -0.086]} rotation={[0.125, 0.012, -0.701]} scale={[0.005, 0.007, 0.005]} />
//         <mesh name="Sphere008" geometry={nodes.Sphere008.geometry} material={materials['Stylized Concrete']} position={[-0.004, 2.593, -0.059]} rotation={[0.295, 0.292, 0.316]} scale={[0.004, 0.006, 0.004]} />
//         <mesh name="Sphere009" geometry={nodes.Sphere009.geometry} material={materials['Stylized Concrete']} position={[-0.005, 2.653, -0.079]} rotation={[-2.169, 0.712, 1.031]} scale={[0.005, 0.007, 0.005]} />
//         <mesh name="Sphere010" geometry={nodes.Sphere010.geometry} material={materials['Stylized Concrete']} position={[-0.048, 2.971, -0.234]} rotation={[0.998, 1.017, -0.056]} scale={[0.005, 0.007, 0.005]} />
//         <mesh name="Sphere011" geometry={nodes.Sphere011.geometry} material={materials['Stylized Concrete']} position={[-0.05, 3.078, -0.208]} rotation={[-0.052, 0.521, -1.627]} scale={[0.005, 0.007, 0.005]} />
//         <mesh name="Sphere012" geometry={nodes.Sphere012.geometry} material={materials['Stylized Concrete']} position={[-0.051, 3.138, -0.228]} rotation={[-0.567, -0.259, -1.123]} scale={[0.004, 0.005, 0.004]} />
//         <mesh name="Sphere115" geometry={nodes.Sphere115.geometry} material={materials['Stylized Concrete']} position={[0.046, 2.579, -0.221]} rotation={[0.163, -0.967, 1.16]} scale={[0.003, 0.005, 0.003]} />
//         <mesh name="Sphere117" geometry={nodes.Sphere117.geometry} material={materials['Stylized Concrete']} position={[0.045, 2.639, -0.241]} rotation={[0.884, 0.422, -0.107]} scale={[0.005, 0.008, 0.005]} />
//         <mesh name="Sphere139" geometry={nodes.Sphere139.geometry} material={materials['Stylized Concrete']} position={[-0.045, 3.078, -0.234]} rotation={[1.064, -1.047, -0.052]} scale={[0.005, 0.008, 0.005]} />
//         <mesh name="Sphere169" geometry={nodes.Sphere169.geometry} material={materials['Stylized Concrete']} position={[0.007, 3.629, -0.222]} rotation={[-0.636, -0.861, 0.945]} scale={[0.004, 0.006, 0.004]} />
//         <mesh name="Sphere195" geometry={nodes.Sphere195.geometry} material={materials['Stylized Concrete']} position={[0.032, 3.969, -0.285]} rotation={[0.07, 0.139, 1.131]} scale={[0.003, 0.005, 0.003]} />
//         <mesh name="Sphere364" geometry={nodes.Sphere364.geometry} material={materials['Stylized Concrete']} position={[0.076, 2.639, -0.222]} rotation={[-0.097, -0.442, 1.333]} scale={[0.004, 0.006, 0.004]} />
//         <mesh name="Sphere366" geometry={nodes.Sphere366.geometry} material={materials['Stylized Concrete']} position={[0.032, 2.593, -0.067]} rotation={[0.794, 0.368, 0.487]} scale={[0.005, 0.007, 0.005]} />
//         <mesh name="Sphere367" geometry={nodes.Sphere367.geometry} material={materials['Stylized Concrete']} position={[0.031, 2.653, -0.087]} rotation={[0.522, -0.098, -1.304]} scale={[0.004, 0.006, 0.004]} />
//         <mesh name="Sphere374" geometry={nodes.Sphere374.geometry} material={materials['Stylized Concrete']} position={[0.063, 3.969, -0.266]} rotation={[-0.01, -0.901, -1.581]} scale={[0.003, 0.005, 0.003]} />
//         <mesh name="Sphere899" geometry={nodes.Sphere899.geometry} material={materials['Stylized Concrete']} position={[-0.073, 0.28, -0.213]} rotation={[-1.967, -Math.PI / 2, 0]} scale={[0.006, 0.009, 0.006]} />
//         <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Stylized wood']} position={[0.005, 0.13, -0.187]} scale={[1.023, 1, 1.023]} />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/harvest.glb')
