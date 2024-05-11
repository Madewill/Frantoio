import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';


const Harvesting = ({ language }) => {
    const [isVisible, setIsVisible] = useState(false);
    const titleControls = useAnimation();
    const textControls = useAnimation();
    const vidControls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.planting');
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (sectionTop < windowHeight * 0.5) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible) {
            titleControls.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } });
            textControls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
            vidControls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
        } else {
            titleControls.start({ y: 50, opacity: 0 });
            textControls.start({ x: -100, opacity: 0 });
            vidControls.start({ x: 400, opacity: 0 });

        }
    }, [isVisible, titleControls, textControls, vidControls]);


    return (

        <div  id="harvesting" className="planting overflow-hidden px-[100px] h-auto mb-[50px]">

            <motion.h3
                initial={{ y: 50, opacity: 0 }}
                animate={titleControls}
                className={language === 'english' ? 'copperplate-Bold text-[40px] text-center' : 'arabic-bold text-[40px] text-center'}
            >
                {language === 'english' ? 'HARVESTING' : 'قطف الزيتون'}
            </motion.h3>


            <div className='flex justify-between items-center h-[500px]'>
                
            <motion.div
                className=""
                initial={{ x: -100, opacity: 0 }}
                animate={textControls}
            >
                {language === 'english' ? (
                    <p className="oswald text-[20px]">
                        Hands and tradition meet in the olive <br />
                        groves as the ripe olives are carefully <br />
                        harvested. Each olive is picked with <br />
                        respect, preserving its integrity and the <br />
                        ancient bond between land and farmer.
                    </p>
                ) : (
                    <p className='arabic text-[20px]'>
                        تلتقي األيدي في بساتين الزيتون<br />حيث يتم قطف الزيتون الناضج بعناية<br />و رعاية فائقة للحفاظ على سالمة الثمرة.
                    </p>
                )}
            </motion.div>

            <motion.div 
                       initial={{ x: 400, opacity: 0 }}
                       animate={vidControls} className="plant-gif">
                    <video autoPlay loop muted className="overflow-y-hidden">
                        <source src="../assets/videos/harvest.webm" type="video/webm" />
                    </video>
                </motion.div>

         </div>

        </div>
    );
};

export default Harvesting;

















