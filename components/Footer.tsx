
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <span className="text-lg font-bold">{t('footer_title')}</span>
            <p className="text-gray-400 mt-1">{t('footer_rights', { year })}</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">{t('privacy_policy')}</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">{t('terms_of_service')}</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">{t('contact')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
