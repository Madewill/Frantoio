import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';
import Background from './Background';
import Main from './main';


const Home = ({ language, switchToEnglish, switchToArabic }) => {



    // Animation with framer motion definition
    //  Note: passed into Navigation as a Prop!
    // const [animateHero, setAnimateHero] = useState(false);

    // useEffect(() => {
    //     if (isLoaded) {
    //         setAnimateHero(true);
    //     }
    // }, [isLoaded]);


    return (
        <>
            <section className='overflow-hidden'>

                <Navigation language={language} switchToEnglish={switchToEnglish} switchToArabic={switchToArabic}  />
                     {/* Partitioning Bar */}
            {/* position will be relative to the I am absolute, left top, so will be from base of div containing menu */}
            <div className="bar mx-auto"></div>
                <Main language={language} />

                {/* Background video component controlled by index.css so it spreads across all sections */}
                <Background />

            </section>
        </>
    )
}

export default Home