import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// used to control the scroll down propmt image in mobile screen scroll-to section
const scrollToSection = () => {
    const element = document.getElementById('process');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};


const Main = ({ language }) => {

    // Animation with framer motion definition
    //  Note: passed into Navigation as a Prop!
    const [animateHero, setAnimateHero] = useState(false);

    // useEffect(() => {
    //     if (isLoaded) {
    //         setAnimateHero(true);
    //     }
    // }, [isLoaded]);


    return (
        
            < div className='w-full h-auto  flex flex-col p-[100px] justify-self-center  items-center  text-center overflow-y-hidden' >
                {/* Text Content including the video drop div and not section, also not having html fragment */}

                {/* uppertexts */}
                < div className="overflow-y-hidden" >
                    {language === 'english' ? (
                        <h2
                            className='copperplate-Bold text-[40px] mix-blend-overlay'>FRANTOIO LIBICO</h2>
                    ) : (
                        <h2 className='arabic-bold text-[40px] mix-blend-overlay'>عصر المغفل الليبي</h2>
                    )
                    }
                

              
                    {
                        language === 'english' ? (
                            <p
                                className='copperplate text-[20px] mix-blend-overlay'>from Grove to Gourmet</p>
                        ) : (
                            <p
                                className='arabic text-[20px] mix-blend-overlay'>من البستان إلى الطهاة الراقين</p>
                        )
                    }
                </div >

                {/* video gif */}
                <div className="gif">
                    <video autoPlay loop muted className="overflow-y-hidden">
                        <source src="../assets/images/drop.webm" type="video/webm" />
                    </video>
                </div>


                {/* lower content */}
                <div className="lower-text overflow-y-hidden">
                    <h3 className={language === 'arabic' ? 'arabic text-[20px] mix-blend-overlay' : 'copperplate text-[20px] mix-blend-overlay'}>
                        {language === 'english' ? (
                            <>
                                <span>Welcome to Frantoio Libico, your one-stop destination</span>
                                <br />
                                <span>for the finest cold-pressed virgin olive oil! Embark on a</span>
                                <br />
                                <span>whimsical journey with us as we take you through each</span>
                                <br />
                                <span>step of our olive oil-making process</span>
                            </>
                        ) : (
                            <>
                                <span className=''>مرحبًا بك في فرانتويو ليبيكو،</span>
                                <br />
                                <span className=''>وجهتك الواحدة لأفضل زيت زيتون بكر بالضغط البارد! انطلق معنا في رحلة خيالية</span>
                                <br />
                                <span className=''>حيث نأخذك خطوة بخطوة من خلال عملية صنع زيت الزيتون الخاص بنا</span>
                            </>
                        )}
                    </h3>
                </div>



            </div >
    )
}

export default Main