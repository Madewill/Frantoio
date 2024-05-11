import React, { useState, useEffect } from 'react';
import Index from './Resource/Frantoio';
import LanguageSwitcher from './Resource/LanguageSwitcher';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Sections from './Resource/sections';
import Footer from './components/Footer';
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
                            <Sections language={language} />
                            <Footer language={language}s/>
                        </>
                    </BrowserRouter>
                )}
            </LanguageSwitcher>
  </>
    
  );
};

export default App;

