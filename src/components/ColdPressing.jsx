import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';


const ColdPressing = ({ language }) => {
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
        <>
            <div id="process" className="planting overflow-hidden px-[100px] h-auto mb-[50px]">

                <motion.h3
                    initial={{ y: 50, opacity: 0 }}
                    animate={titleControls}
                    className={language === 'english' ? 'copperplate-Bold text-[40px] text-center' : 'arabic-bold text-[40px] text-center'}
                >
                    {language === 'english' ? 'COLD PRESSING' : 'سحق الزيتون'}
                </motion.h3>

                <div className='flex justify-between items-center h-[500px]'>

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
                                Within our state-of-the-art press,<br />the harvested olives are<br />
                                transformed. Through cold pressing, the <br />
                                olives release their rich, golden oil — a <br />
                                pure expression of nature, bottled without <br />
                                losing a drop of its essence.
                            </p>
                        ) : (
                            <>
                                <p className='arabic text-[20px]'>
                                    بين الحصاد والعصر، يكمن فن السحق.<br />هنا، يتم سحق الزيتون بلطف، وهي عملية يتم فيها طحن اللحم<br />والبذور لتكوين عجينة. تؤدي هذه الخطوة الحاسمة إلى فتح كنوز الزيتون المخفية،<br />وإعدادها للتحول إلى ذهب سائل.
                                </p>
                            </>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ x: 400, opacity: 0 }}
                        animate={vidControls} className="plant-gif">
                        <video autoPlay loop muted className="overflow-y-hidden">
                            <source src="../assets/videos/Crusher.webm" type="video/webm" />
                        </video>
                    </motion.div>


                </div>

            </div>
        </>
    );
};

export default ColdPressing;










































































