import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Growing = ({ language }) => {
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
                if (sectionTop < windowHeight * 0.3 ) {
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
            textControls.start({ x: 100, opacity: 0 });
            vidControls.start({ x: -400, opacity: 0 });

        }
    }, [isVisible, titleControls, textControls, vidControls]);


    return (
        <>
           <div   id="growing" className="growing overflow-hidden px-[100px] h-auto mb-[50px]">

                
            <motion.h3
                    initial={{ y: 50, opacity: 0 }}
                    animate={titleControls}
                    className={language === 'english' ? 'copperplate-Bold text-[40px] text-center' : 'arabic-bold text-[40px] text-center'}
                >
                    {language === 'english' ? 'GROWING' : 'زراعة أشجار الزيتون'}
                </motion.h3>

            
                <div className='flex flex-row-reverse justify-between items-center h-[500px]'>
                    
                <motion.div 
                 initial={{ x: 100, opacity: 0 }}
                 animate={textControls} className="">
                        {language === 'english' ? (
                            <>
                             <p className='oswald text-[20px]'>
                                As seasons change, the trees flourish, <br />
                                their branches laden with the promise <br />
                                of future harvests.
                             </p>
                            </>
                        ) : (
                            <>
                                <p className='arabic text-[20px]'>
                                    مع تعاقب الفصول، تمتد أشجار زيتوننا نحو السماء، وجذورها تمسك األرض بقوة.<br />
                                    محاطة بتناغم الطبيعة، تزدهر األشجار، وأغصانها محملة بالمحاصيل المستقبلية.
                                </p>
                            </>
                        )}
                </motion.div>

                <motion.div 
                       initial={{ x: -400, opacity: 0 }}
                       animate={vidControls} className="plant-gif">
                    <video autoPlay loop muted className="overflow-y-hidden">
                        <source src="../assets/videos/tree.webm" type="video/webm" />
                    </video>
                </motion.div>
                
                </div>

            </div>
        </>
    );
};

export default Growing;
