import React from 'react';
import CanvasComponent from '../../components/CanvasComponent';
import ColdpresserModel from '../models/Coldpresser';

const Coldpresser_render = () => {
  return (
    <>
      <CanvasComponent className=''>
        <ColdpresserModel
          // glbPath="./seed.glb"
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[0, 0, 0]}
        />
      </CanvasComponent>
    </>
  );
};

export default Coldpresser_render;
