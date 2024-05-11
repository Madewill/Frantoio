import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './Resource/LanguageSwitcher';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Planting from './components/Planting';
import Growing from './components/Growing';
import Harvesting from './components/Harvesting';
import Crushing from './components/Crushing';
import ColdPressing from './components/ColdPressing';
import Bottling from './components/Bottling';
import Main from './components/main';
import Background from './components/Background';
import Navigation from './components/Navigation';
// import Frantoio from './Resource/Frantoio';



const App = () => {

  return (
    <>
      {/* <Frantoio /> */}
      <LanguageSwitcher defaultLanguage='english'>
        {({ language, switchToEnglish, switchToArabic }) => (
          <BrowserRouter>

            <section className='overflow-hidden'>
              <Navigation language={language} switchToEnglish={switchToEnglish} switchToArabic={switchToArabic} />
              {/* Partitioning Bar */}
              {/* position will be relative to the I am absolute, left top, so will be from base of div containing menu */}
              <div className="bar mx-auto"></div>
              <Main language={language} />

              {/* Background video component controlled by index.css so it spreads across all sections */}
              <Background />
            </section>


            <Planting language={language} />
            <Growing language={language} />
            <Harvesting language={language} />
            <Crushing language={language} />
            <ColdPressing language={language} />
            <Bottling language={language} />
            <Footer language={language} s />

          </BrowserRouter>
        )}
      </LanguageSwitcher>
    </>

  );
};

export default App;

