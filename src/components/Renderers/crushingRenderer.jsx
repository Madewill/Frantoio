import React from 'react';
import CanvasComponent from '../../components/CanvasComponent';
import CrusherModel from '../models/Crusher';

const Crusher_render = () => {
  return (
    <>
      <CanvasComponent className=''>
        <CrusherModel
          // glbPath="./seed.glb"
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[0, 0, 0]}
        />
      </CanvasComponent>
    </>
  );
};

export default Crusher_render;
