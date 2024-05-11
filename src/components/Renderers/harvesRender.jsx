// Harvest_render.jsx
import React from 'react';
import CanvasComponent from '../../components/CanvasComponent';
import HarvestModel from '../../components/models/Harvest';

const Harvest_render = () => {
  return (
    <>
      <CanvasComponent className=''>
        <HarvestModel
          // glbPath="./seed.glb"
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[0, 0, 0]}
        />
      </CanvasComponent>
    </>
  );
};

export default Harvest_render;
