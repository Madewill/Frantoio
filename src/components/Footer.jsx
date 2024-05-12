
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Footer = ({ language }) => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value }); // Fixed object name typo
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send('service_jd8or1q', 'template_yb7bil4', {
                from_name: form.name,
                to_name: 'Ayomide',
                from_email: form.email,
                to_email: 'ayomidegw@gmail.com',
                message: form.message,
            }, 'NxFpVvbWKrPs1T1ha')

            .then((response) => {
                setLoading(false);
                console.log('Email sent:', response);

                alert('Thank you. I will get back to you as soon as possible');

                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                setLoading(false);
                console.error('Email error:', error);
                alert('Something went wrong.');
            });
    };

    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();
    const controls2 = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('.footer');
            if (footer) {
                const footerTop = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (footerTop < windowHeight * 0.9) {
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
            controls.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } });
            controls2.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } });
        } else {
            controls.start({ x: -50, opacity: 0 });
            controls2.start({ x: 50, opacity: 0 });
        }
    }, [isVisible, controls]);
    return (
        <>
             
            <div  id="contact" className='footer h-[60vh] w-full relative'>

                <div className=" relative h-full w-[90vw] gap-[50px] flex flex-col lg:flex-row mx-auto py-[40px] footer-border justify-between">


                    <motion.div  initial={{ x: -50, opacity: 0 }} animate={controls} className="flex flex-col w-[100%] h-auto box-border lg:w-[40%]">

                        {language === 'english' ? (<h3 className='oswald text-[30px]'>Contact Form</h3>) : (<h3 className="arabic text-[30px]">نموذج الاتصال</h3>)}

                        <input type="text" placeholder={language === 'english' ? 'Name' : 'الاسم'} className={language === 'arabic' ? 'arabic' : 'oswald'} />
                        <input type="email" placeholder={language === 'english' ? 'Email' : 'البريد الإلكتروني'} className={language === 'arabic' ? 'arabic' : 'oswald'} />
                        <textarea rows="" cols="" placeholder={language === 'english' ? 'Your Message' : 'رسالتك'} className={language === 'arabic' ? 'arabic' : 'oswald'}></textarea>
                        <button className={language === 'arabic' ? 'arabic w-[50px] send' : 'oswald w-[50px] send'}>{language === 'english' ? 'Send' : 'إرسال'}</button>

                    </motion.div>


                    <motion.div initial={{ x: 50, opacity: 0 }} animate={controls2} className={language === 'english' ? 'flex flex-col w-auto gap-[30px]' : 'flex flex-col w-[40%] gap-[30px]'}>

                        <div className="about">

                            {language === 'english' ? (<h3 className='oswald text-[30px]'>About Us</h3>) : (<h3 className="arabic text-[30px]">عن شركتنا</h3>)}

                            {language === 'english' ? (<p className="copperplate text-[10px]"> Oliolibico is a leading supplier and manufacturer <br /> of olive oil. Our product consist of a huge <br /> selection of valuable cold pressed  olive oil. </p>) : (<p className="arabic w-[100%]">أوليوليبيكو هي شركة رائدة في توريد وتصنيع زيت الزيتون. منتجاتنا تتكون من مجموعة كبيرة من زيت الزيتون البكر الممتاز العضوي والمعصور على البارد.' </p>)}
                        </div>


                        <div className="">

                            {language === 'english' ? (<h3 className='oswald text-[30px]'>Contact Us</h3>) : (<h3 className="arabic text-[30px]">اتصل بنا</h3>)}

                            <div className='flex flex-col gap-[10px]'>

                                {language === 'english' ? (<p className='copperplate text-[10px]'>info@oliolibico.com</p>) : (<p className='arabic text-[10px]'>معلومات@أوليوليبيكو.كوم</p>)}

                                <p className='copperplate text-[10px]'>+218 94 200 05 17</p>
                            </div>
                        </div>

                        <div className="copyright">
                            {language === 'english' ? (<> <p className='oswald'>Copyright © 2024 Oliolibico, All rights reserved</p></>) : (<>
                                <p className="arabic">حقوق النشر © 2024 أوليوليبيكو، جميع الحقوق محفوظة</p>
                            </>)}
                        </div>
                    </motion.div>

                </div>

               {/* Bottom Gradient */}
               <div className="footer-gradient"></div>
            </div>


            <div className="copyright-mobile md:hidden">
                {language === 'english' ? (<> <p>Copyright © 2024 Oliolibico, All rights reserved</p></>) : (<>
                    <p className="arabic-font">حقوق النشر © 2024 أوليوليبيكو، جميع الحقوق محفوظة</p>
                </>)}
            </div>

        </>
    )
}

export default Footer;


