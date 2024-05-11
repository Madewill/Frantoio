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
import Main from './components/main';
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

            <section className='overflow-hidden'>
              <Navigation language={language} switchToEnglish={switchToEnglish} switchToArabic={switchToArabic} />
              {/* Partitioning Bar */}
              {/* position will be relative to the I am absolute, left top, so will be from base of div containing menu */}
              <div className="bar mx-auto"></div>
              
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

              {/* Background video component controlled by index.css so it spreads across all sections */}
              <Background />
            </section>


            <Planting language={language} />
            <Growing language={language} />
            <Harvesting language={language} />
            <Crushing language={language} />
            <ColdPressing language={language} />
            <Bottling language={language} />
            <Footer language={language} s />

          </BrowserRouter>
        )}
      </LanguageSwitcher>
    </>

  );
};

export default App;

