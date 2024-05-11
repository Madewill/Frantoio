import React from 'react'
import Planting from '../components/Planting';
import Harvesting from '../components/Harvesting';
import Growing from '../components/Growing';
import Crushing from '../components/Crushing';
import ColdPressing from '../components/ColdPressing';
import Bottling from '../components/Bottling';

const Sections = ({language}) => {
  return (
    <>
    <Planting language={language} />
    <Growing language={language}/>
    <Harvesting language={language}/>
    <Crushing language={language} />
    <ColdPressing language={language} />
    <Bottling language={language} />
    </>
  )
}

export default Sections;