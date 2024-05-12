import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './Resource/LanguageSwitcher';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Planting from './components/Planting';
import Growing from './components/Growing';
import Harvesting from './components/Harvesting';
import Crushing from './components/Crushing';
import ColdPressing from './components/ColdPressing';
import Bottling from './components/Bottling';
import Background from './components/Background';
import Navigation from './components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';




const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const totalItems = 10; // Total number of items to load (adjust as needed)
    let loadedItems = 0; // Counter for loaded items

    const updateProgress = () => {
      loadedItems++;
      const progress = Math.floor((loadedItems / totalItems) * 100);
      setLoadingProgress(progress);
    };

    // Simulating loading of items (replace this with actual loading logic)
    const loadingInterval = setInterval(() => {
      updateProgress();
      if (loadedItems === totalItems) {
        clearInterval(loadingInterval);
        setIsLoaded(true); // Set isLoaded to true when loading is complete
      }
    }, 500);

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <>
      {/* <Frantoio /> */}
      <LanguageSwitcher defaultLanguage='english'>
        {({ language, switchToEnglish, switchToArabic }) => (
          <BrowserRouter>

            <AnimatePresence>
              {loadingProgress < 100 && (
                <motion.div
                  key="loader"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="loader"
                >
                  <span>{loadingProgress}%</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className='Header-gradient'></div>

            <Navigation language={language} switchToEnglish={switchToEnglish} switchToArabic={switchToArabic} isLoaded={isLoaded} />

            {/* BAR */}
            <AnimatePresence>
              {isLoaded && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transformOrigin="left center"
                  transition={{ duration: 0.8, delay: 1 }}
                  className=" mx-auto w-[80vw] h-[1vh]">
                  <div className=' h-[2.5px] w-[100%] bg-[#f7c166]'></div>
                </motion.div>
              )}
            </AnimatePresence>

            < div className=' xl:w-full h-[80vh]  flex flex-col p-[100px] justify-self-center  items-center  text-center overflow-y-hidden' >


              <AnimatePresence>
                {isLoaded && (
                  <motion.div initial={{ y: -200 }}
                    animate={{ y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="overflow-y-hidden box-border" >
                    {language === 'english' ? (
                      <h2
                        className='copperplate-Bold text-[25px] xl:text-[40px] mix-blend-screen opacity-[40%]'>FRANTOIO LIBICO</h2>
                    ) : (
                      <h2 className=' arabic-bold text-[25px] xl:text-[40px] mix-blend-screen'>عصر المغفل الليبي</h2>
                    )
                    }
                  </motion.div >
                )}
              </AnimatePresence>


              <AnimatePresence>
                {isLoaded && (
                  <motion.div initial={{ x: 850 }}
                    animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1 }} className="overflow-y-hidden box-border" >
                    {
                      language === 'english' ? (
                        <p
                          className='copperplate lg:text-[10px] xl:text-[20px] mix-blend-screen'>from Grove to Gourmet</p>
                      ) : (
                        <p
                          className='arabic lg:text-[10px] xl:text-[20px] mix-blend-screen'>من البستان إلى الطهاة الراقين</p>
                      )
                    }
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isLoaded && (
                  <motion.div initial={{ y: -400 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }} className="gif overflow-hidden">
                    <video autoPlay loop muted className="overflow-y-hidden">
                      <source src="../assets/images/drop.webm" type="video/webm" />
                    </video>
                  </motion.div>
                )}
              </AnimatePresence>



              <AnimatePresence>
                {isLoaded && (
                  <motion.div
                    initial={{ y: 400 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="lower-text overflow-y-hidden h-auto box-border">
                    <h3 className={language === 'arabic' ? 'arabic lg:text-[10px] xl:text-[20px] mix-blend-screen opacity-[50%]' : 'copperplate lg:text-[10px] xl:text-[20px] mix-blend-screen'}>
                      {language === 'english' ? (
                        <>
                          Welcome to Frantoio Libico, your one-stop destination
                          <br />
                          for the finest cold-pressed virgin olive oil! Embark on a
                          <br />
                          whimsical journey with us as we take you through each
                          <br />
                          step of our olive oil-making process
                        </>
                      ) : (
                        <>
                          مرحبًا بك في فرانتويو ليبيكو،
                          <br />
                          وجهتك الواحدة لأفضل زيت زيتون بكر بالضغط البارد! انطلق معنا في رحلة خيالية
                          <br />
                          حيث نأخذك خطوة بخطوة من خلال عملية صنع زيت الزيتون الخاص بنا
                        </>
                      )}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>



            </div >

            {/* Background video component controlled by index.css so it spreads across all sections */}
            <Background />

            <Planting language={language} />
            <Growing language={language} />
            <Harvesting language={language} />
            <Crushing language={language} />
            <ColdPressing language={language} />
            <Bottling language={language} />
            <Footer language={language} />


          </BrowserRouter>
        )}
      </LanguageSwitcher>
    </>

  );
};

export default App;

