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
// import Frantoio from './Resource/Frantoio';



const App = () => {

  return (
    <>
      {/* <Frantoio /> */}
      <LanguageSwitcher defaultLanguage='english'>
        {({ language, switchToEnglish, switchToArabic }) => (
          <BrowserRouter>

          <div className='Header-gradient'></div>
         
            <Navigation language={language} switchToEnglish={switchToEnglish} switchToArabic={switchToArabic} />
            
            {/* BAR */}
            <div className=" mx-auto w-[80vw] h-[1vh]">
              <div className=' h-[2.5px] w-[100%] bg-[#f7c166]'></div>
            </div>

            < div className=' xl:w-full h-[80vh]  flex flex-col p-[100px] justify-self-center  items-center  text-center overflow-y-hidden' >



              < div className="overflow-y-hidden box-border" >
                {language === 'english' ? (
                  <h2
                    className='copperplate-Bold text-[25px] xl:text-[40px] mix-blend-overlay'>FRANTOIO LIBICO</h2>
                ) : (
                  <h2 className=' arabic-bold text-[25px] xl:text-[40px] mix-blend-overlay'>عصر المغفل الليبي</h2>
                )
                }
              </div >

              <div className="overflow-y-hidden box-border" >
              {
                  language === 'english' ? (
                    <p
                      className='copperplate lg:text-[10px] xl:text-[20px] mix-blend-overlay'>from Grove to Gourmet</p>
                  ) : (
                    <p
                      className='arabic lg:text-[10px] xl:text-[20px] mix-blend-overlay'>من البستان إلى الطهاة الراقين</p>
                  )
                }
              </div>


              <div className="gif overflow-hidden">
                <video autoPlay loop muted className="overflow-y-hidden">
                  <source src="../assets/images/drop.webm" type="video/webm" />
                </video>
              </div>



              <div className="lower-text overflow-y-hidden h-auto box-border">
                <h3 className={language === 'arabic' ? 'arabic lg:text-[10px] xl:text-[20px] mix-blend-overlay' : 'copperplate lg:text-[10px] xl:text-[20px] mix-blend-overlay'}>
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
              </div>



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

