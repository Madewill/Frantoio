import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Bottling = ({ language }) => {
    const [isVisible, setIsVisible] = useState(false);
    const titleControls = useAnimation();
    const textControls = useAnimation();
    const vidControls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.bottling');
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (sectionTop < windowHeight * 0.3) {
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
            <div id="products" className="bottling overflow-hidden px-[100px] h-auto mb-[50px]">


                <motion.h3
                    initial={{ y: 50, opacity: 0 }}
                    animate={titleControls}
                    className={language === 'english' ? 'copperplate-Bold text-[40px] text-center' : 'arabic-bold text-[40px] text-center'}
                >
                    {language === 'english' ? 'OUR PRODUCTS' : 'منتجاتنا'}
                </motion.h3>


                <div className='flex flex-row-reverse justify-between items-center h-[500px]'>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={textControls} className="">
                        {language === 'english' ? (
                            <>
                                <p className='oswald text-[20px]'>
                                    In the final frame, the golden oil finds<br />its home in elegant
                                    bottles. Each bottle<br />
                                    is a testament to quality, a bridge from <br />
                                    our groves to your table, sealing the essence <br /> of our organic,
                                    cold-pressed extra virgin olive oil.
                                </p>
                            </>
                        ) : (
                            <>
                                <p className='arabic text-[20px]'>في الإطار النهائي، يجد الزيت الذهبي موطنه في زجاجات أنيقة. <br /> كل زجاجة هي شهادة على الجودة، وهي بمثابة جسر من بساتيننا <br /> إلى طاولتك، مما يحافظ على جوهر زيت الزيتون البكر الممتاز <br /> العضوي والمعصور على البارد.</p>
                            </>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ x: -400, opacity: 0 }}
                        animate={vidControls} className="plant-gif">
                        <video autoPlay loop muted className="overflow-y-hidden">
                            <source src="../assets/videos/bottles.webm" type="video/webm" />
                        </video>
                    </motion.div>

                </div>

            </div>
        </>
    );
};

export default Bottling;





































































