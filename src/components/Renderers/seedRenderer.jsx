import React from 'react';
import CanvasComponent from '../../components/CanvasComponent';
import SeedModel from '../models/Seed';


const Seed_render = () => {
  return (
    <>
      <CanvasComponent className=''>
        <SeedModel
          // glbPath="./seed.glb"
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[0, 0, 0]}
        />
      </CanvasComponent>
    </>
  );
};

export default Seed_render;
