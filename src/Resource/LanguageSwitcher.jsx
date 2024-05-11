// LanguageSwitcher.jsx
import React, { useState } from 'react';

const LanguageSwitcher = ({ defaultLanguage, children }) => {
    const [language, setLanguage] = useState(defaultLanguage);

    const switchToEnglish = () => {
        setLanguage('english');
    };

    const switchToArabic = () => {
        setLanguage('arabic');
    };

    return children({ language, switchToEnglish, switchToArabic });
};

export default LanguageSwitcher;


// const LanguageSwitcher = ({ defaultLanguage, children }) => {
//     const [language, setLanguage] = useState(defaultLanguage);

//     const toggleLanguage = () => {
//         setLanguage(language === 'english' ? 'arabic' : 'english');
//     };

//     return children({ language, toggleLanguage });
// };

// export default LanguageSwitcher;
