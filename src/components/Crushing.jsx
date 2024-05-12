import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Crushing = ({ language }) => {
    const [isVisible, setIsVisible] = useState(false);
    const titleControls = useAnimation();
    const textControls = useAnimation();
    const vidControls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.crushing');
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (sectionTop < windowHeight * 0.95 ) {
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
           <div   id="crushing" className="crushing overflow-hidden px-[100px] h-auto mb-[50px]">

                
            <motion.h3
                    initial={{ y: 50, opacity: 0 }}
                    animate={titleControls}
                    className={language === 'english' ? 'copperplate-Bold text-[40px] text-center' : 'arabic-bold text-[40px] text-center'}
                >
                    {language === 'english' ? 'CRUSHING' : 'عصر الزيتون على البارد'}
                </motion.h3>

            
                <div className='flex flex-row-reverse justify-between items-center h-[500px]'>
                    
                <motion.div 
                 initial={{ x: 100, opacity: 0 }}
                 animate={textControls} className="">
                        {language === 'english' ? (
                            <>
                             <p className='oswald text-[20px]'>
                             Between the harvest and the press <br />, comes the crushing. Here,
                        the olives are<br />
                        gently crushed, a process where the <br />
                        flesh and pits are ground to create a<br />
                        paste. This crucial step unlocks the<br />
                        olives' hidden treasures, preparing them<br />
                        for the transformation into liquid gold.
                             </p>
                            </>
                        ) : (
                            <>
                                <p className='arabic text-[20px]'>في معاصرنا الحديثة،<br />يتم تحويل الزيتون المحصود إلى زيت ذهبي غني صحي<br />من خالل العصر البارد.</p>
                            </>
                        )}
                </motion.div>

                <motion.div 
                       initial={{ x: -400, opacity: 0 }}
                       animate={vidControls} className="plant-gif">
                    <video autoPlay loop muted className="overflow-y-hidden">
                        <source src="../assets/videos/crusher_1.webm" type="video/webm" />
                    </video>
                </motion.div>
                
                </div>

            </div>
        </>
    );
};

export default Crushing;










































