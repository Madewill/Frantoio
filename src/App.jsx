import React, { useState, useEffect } from 'react';
import Index from './Resource/Frantoio';
import Frantoio from './Resource/Frantoio';



const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState('english');
  const [loadingProgress, setLoadingProgress] = useState(0);


  const navLinks = [
    { id: 'process', title: 'processes', arabicTitle: 'عمليات' },
    { id: 'products', title: 'products', arabicTitle: 'منتجات' },
    { id: 'contact', title: 'Contact', arabicTitle: 'اتصال' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'arabic' : 'english');
  };

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
    <Frantoio />
  </>
    
  );
};

export default App;

