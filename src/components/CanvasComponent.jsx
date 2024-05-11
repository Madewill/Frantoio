import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber'

const CanvasComponent = ({ children }) => {
  const camera = useRef();
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <group ref={camera}>{children}</group>
    </Canvas>
  );
};

export default CanvasComponent;
