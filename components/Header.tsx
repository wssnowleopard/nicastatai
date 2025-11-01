
import React from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414m15.556 15.556l-1.414-1.414M18.364 5.636l1.414-1.414M4.222 19.778l1.414-1.414M12 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          <span className="text-2xl font-bold text-white">
            {t('header_title')}
          </span>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">{t('courses')}</a>
          <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">{t('about')}</a>
          <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">{t('contact')}</a>
          <button className="bg-emerald-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105">
            {t('sign_in')}
          </button>

          {/* Language switch buttons */}
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-emerald-600 text-white' : 'text-gray-300 hover:text-emerald-400'}`}
              aria-label={t('lang_en')}
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage('es')}
              className={`px-3 py-1 rounded ${i18n.language === 'es' ? 'bg-emerald-600 text-white' : 'text-gray-300 hover:text-emerald-400'}`}
              aria-label={t('lang_es')}
            >
              ES
            </button>
          </div>
        </nav>
        <button className="md:hidden text-gray-300 hover:text-emerald-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
