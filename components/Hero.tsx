
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div
        className="absolute -top-80 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:left-1/2 sm:ml-24 lg:left-1/2 lg:ml-40 xl:left-1/2 xl:ml-0 xl:-translate-x-1/2"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#34d399] to-[#059669] opacity-30"
          style={{
            clipPath:
              'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
          }}
        />
      </div>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
          <Trans i18nKey="hero_title">
            Unlock the Power of Data with <span className="text-emerald-400">Python & AI</span>
          </Trans>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {t('hero_subtitle')}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#courses"
            className="rounded-md bg-emerald-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-all duration-300 transform hover:scale-105"
          >
            {t('explore_courses')}
          </a>
          <a href="#" className="text-lg font-semibold leading-6 text-gray-300 group">
            {t('learn_more')} <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
