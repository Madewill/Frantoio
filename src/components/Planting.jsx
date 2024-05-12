import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';


const Planting = ({ language }) => {
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
                if (sectionTop < windowHeight * 0.95) {
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
        <>
            <div   id="process" className="planting overflow-hidden px-[100px] h-auto mb-[50px]">
                
                <AnimatePresence>
                <motion.h3
                    initial={{ y: 50, opacity: 0 }}
                    animate={titleControls}
                    className={language === 'english' ? 'copperplate-Bold text-[40px] text-center' : 'arabic-bold text-[40px] text-center'}
                >
                    {language === 'english' ? 'PLANTING' : 'زراعة البذرة'}
                </motion.h3>
                </AnimatePresence>
            
            <div className='flex justify-between items-center h-[500px]'>
                
                <AnimatePresence>
                <motion.div className=""
                        initial={{ x: -100, opacity: 0 }}
                        animate={textControls}
                        style={{ 
                            '@media (maxWidth: 768px)': { // Apply different animation for mobile screens
                                x: 0, // Animate from 0px to its actual position in x direction
                                y: 25, // Animate from 0px to its actual position in y direction
                                transition: { duration: 1 }, // Same transition duration as desktop
                            } 
                        }}
                    >
                        {language === 'english' ? (
                            <p className='oswald text-[20px]'> 
                                A single olive seed is gently placed into<br />
                                fertile soil. This marks the beginning of a<br />
                                journey, where care and nature cultivate<br />
                                the essence of our premium olive oil.
                            </p>
                        ) : (
                            <>
                            <p className='arabic text-[20px]'>
                                في قلب حقل مشمس، توضع بذرة زيتون واحدة بعناية في تربة خصبة.<br />
                                وهذا يمثل بداية رحلة، حيث تتشابك الرعاية والطبيعة لزراعة<br /> جوهر زيت الزيتون الفاخر لدينا.
                                بينما ينمو الزيتون، يعكس الزراعون العناية <br />والحب للأرض والطبيعة.
                            </p>
                            </>
                        )}
                </motion.div>
                </AnimatePresence>

               <AnimatePresence>
                <motion.div 
                       initial={{ x: 400, opacity: 0 }}
                       animate={vidControls} className="plant-gif">
                    <video autoPlay loop muted className="overflow-y-hidden">
                        <source src="../assets/videos/seed.webm" type="video/webm" />
                    </video>
                </motion.div>
                </AnimatePresence>
              

                </div>

            </div>
        </>
    );
};

export default Planting;
