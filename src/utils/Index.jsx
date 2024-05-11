import React, { useState, useEffect } from 'react';
import Sections from './sections';
import Footer from '../components/Footer';
import Home from '../components/Home';
import LanguageSwitcher from './LanguageSwitcher';
import { BrowserRouter } from 'react-router-dom';

const Index = () => {


    return (
        <>
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
    )
}

export default Index;