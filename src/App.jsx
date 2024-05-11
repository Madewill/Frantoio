import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './Resource/LanguageSwitcher';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Planting from './components/Planting';
import Growing from './components/Growing';
import Harvesting from './components/Harvesting';
import Crushing from './components/Crushing';
import ColdPressing from './components/ColdPressing';
import Bottling from './components/Bottling';
// import Frantoio from './Resource/Frantoio';



const App = () => {

  return (
    <>
      {/* <Frantoio /> */}
      <LanguageSwitcher defaultLanguage='english'>
        {({ language, switchToEnglish, switchToArabic }) => (
          <BrowserRouter>
            <>
              <Home language={language} switchToEnglish={switchToEnglish} switchToArabic={switchToArabic} />
              <Planting language={language} />
              <Growing language={language} />
              <Harvesting language={language} />
              <Crushing language={language} />
              <ColdPressing language={language} />
              <Bottling language={language} />
              <Footer language={language} s />
            </>
          </BrowserRouter>
        )}
      </LanguageSwitcher>
    </>

  );
};

export default App;

