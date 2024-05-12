import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ language, switchToEnglish, switchToArabic }) => {

    // const [isLoaded, setIsLoaded] = useState(false);
    const [toggle, setToggle] = useState(false);


    const navLinks = [
        { id: 'process', title: 'Processes', arabicTitle: 'عمليات' },
        { id: 'products', title: 'Our Products', arabicTitle: 'منتجات' },
        { id: 'contact', title: 'Contact', arabicTitle: 'اتصال' },
    ];

{/* <div className='Header-gradient'></div> */}

    return (
        // The navigation has a height of 15vh 
        <div className='navigation flex justify-between  items-center overflow-y-hidden xl:h-[15vh] w-[80vw] mx-auto my-[10px]'>


            <motion.div
                className=""
                transition={{ duration: 0.8, delay: 1 }}
                initial={{ y: -200 }} // Initial position above the viewport
                animate={{ y: 0 }} // Animate to 0 (visible) when loaded
            >
                <img src={language === 'english' ? '../assets/images/english.jpg' : '../assets/images/arabic-logo.jpg'} alt="" className="logo xl:h-[100px] w-[100px]" />
                <div className="empty"></div>
            </motion.div>


            <div className='flex justify-between  items-center gap-[60px]'>
                {/* <div className='flex flex-row-reverse   md:flex justify-between  items-center gap-[20px]'> */}
                <div className="menu">
                    <div className="options">
                        <AnimatePresence>

                            <motion.ul
                                key="navLinks"
                                initial={{ y: -100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                // transition={{ duration: 0.5, delay: 0.5 }}
                                className='list-none hidden sm:flex flex-row lg:gap-5  xl:gap-10 items-center'
                            >
                                {navLinks.map((link) => (
                                    <li key={link.id} className={`font-sans ${language === 'arabic' ? 'arabic lg:text-[16px]' : 'copperplate lg:text-[12px]'} hover: cursor-pointer`}>
                                        <a href={`#${link.id}`}>{language === 'arabic' ? link.arabicTitle : link.title}</a>
                                    </li>
                                ))}
                            </motion.ul>

                        </AnimatePresence>
                    </div>
                </div>

                <div className="buttons">
                    <motion.button
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className={`button ${language === 'arabic' ? 'active copperplate outline-none ' : ''}`}
                        onClick={switchToArabic}
                    >
                        AR
                    </motion.button>

                    <span className="partition copperplate">|</span>

                    <motion.button
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className={`button ${language === 'english' ? 'active copperplate outline-none' : ''}`}
                        onClick={switchToEnglish}
                    >
                        EN
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <img
                src={toggle ? "./assets/images/close.svg" : "./assets/images/menu.svg"}
                alt="menu"
                className='menu w-[25px] h-[25px] object-contain cursor-pointer md:hidden'
                onClick={() => setToggle(!toggle)}
            />
            {/* Mobile Drop down */}
            {toggle && (
                <ul className="dropdown md:hidden">
                    {navLinks.map((link) => (
                        <li key={link.id} className={`font-sans ${language === 'arabic' ? 'arabic' : 'ul-style copperplate text-[10px]'} hover:cursor-pointer`}>
                            <a href={`#${link.id}`}>{language === 'arabic' ? link.arabicTitle : link.title}</a>
                        </li>
                    ))}
                </ul>
            )}

            {/* Flex end for list item in the navigation */}

        </div>

    )
}

export default Navigation