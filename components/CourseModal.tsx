import React from 'react';
import { useTranslation } from 'react-i18next';
import { Course } from '../types';
import CourseDetails from './CourseDetails';

interface CourseModalProps {
  course: Course;
  onClose: () => void;
}

const LevelBadge: React.FC<{ level: string }> = ({ level }) => {
  const { t } = useTranslation();

  const colorClasses = {
    Beginner: 'bg-blue-500/10 text-blue-400 ring-blue-500/30',
    Intermediate: 'bg-yellow-500/10 text-yellow-400 ring-yellow-500/30',
    Advanced: 'bg-red-500/10 text-red-400 ring-red-500/30',
  };
  const levelClass = colorClasses[level as keyof typeof colorClasses] || 'bg-gray-500/10 text-gray-400 ring-gray-500/30';

  const labelKey = level === 'Beginner' ? 'level_beginner' : level === 'Intermediate' ? 'level_intermediate' : level === 'Advanced' ? 'level_advanced' : level;

  return (
     <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${levelClass}`}>
      {typeof labelKey === 'string' ? t(labelKey, { defaultValue: level }) : level}
    </span>
  );
};

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  const { t } = useTranslation();
  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const title = t(`courses_data.${course.id}.title`, { defaultValue: course.title });
  const shortDescription = t(`courses_data.${course.id}.description`, { defaultValue: course.description });

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-title"
    >
      <div
        className="bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 text-white animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <div>
            <h2 id="course-title" className="text-3xl font-bold text-white mb-2">{title}</h2>
            <LevelBadge level={course.level} />
          </div>
          <button onClick={onClose} aria-label={t('close')} className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

  <p className="text-gray-400 mt-4">{shortDescription}</p>
  <CourseDetails course={course} />
        
        <div className="mt-8 text-right">
           <button className="bg-emerald-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105">
            {t('enroll_now')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;