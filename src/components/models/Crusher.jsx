import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { useFrame } from '@react-three/fiber';

export default function CrusherModel(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('./assets/models/step4.glb');
    const { actions } = useAnimations(animations, group)

    // Determine if the screen is a mobile device
    const isMobile = useMediaQuery({ maxWidth: 767 });

    // Set different values for position, scale, and rotation based on screen size
    const position = isMobile ? [0, 0, 0] : [-5, -1, 0];
    const scale = isMobile ? [6.5, 6.5, 6.5] : [5, 5, 5];
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
                <mesh name="Torus002" geometry={nodes.Torus002.geometry} material={materials['Coarse sand']} position={[0.024, 0.49, 0.038]} rotation={[Math.PI / 2, 0, 0]} scale={0.497} />
                <mesh name="Torus001_dmg" geometry={nodes.Torus001_dmg.geometry} material={materials['Stylized Ground']} position={[0.024, 0.49, 0.038]} rotation={[Math.PI / 2, 0, 0]} />
                <group name="Torus004" position={[0.02, 0.389, -0.228]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh name="Torus004_1" geometry={nodes.Torus004_1.geometry} material={materials['Stylized Ground']} />
                    <mesh name="Torus004_2" geometry={nodes.Torus004_2.geometry} material={materials['Stylized Wood']} />
                    <mesh name="Torus004_3" geometry={nodes.Torus004_3.geometry} material={materials['Stylized Wood Planks']} />
                    <mesh name="Torus001" geometry={nodes.Torus001.geometry} material={materials['Coarse sand']} position={[0.004, 0.265, -0.101]} scale={0.497} />
                    <mesh name="Torus001_dmg001" geometry={nodes.Torus001_dmg001.geometry} material={materials['Stylized Ground']} position={[0.004, 0.265, -0.101]} />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('./assets/models/step4.glb');
