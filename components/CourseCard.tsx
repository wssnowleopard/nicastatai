import React from 'react';
import { useTranslation } from 'react-i18next';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelect: () => void;
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


const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  const { t } = useTranslation();

  const title = t(`courses_data.${course.id}.title`, { defaultValue: course.title });
  const description = t(`courses_data.${course.id}.description`, { defaultValue: course.description });

  return (
    <button 
      onClick={onSelect}
      className="w-full text-left bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700/50 group transform transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/20 hover:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      aria-label={t('view_details_for', { title })}
    >
      <div className="relative">
        <img className="w-full h-48 object-cover" src={course.imageUrl} alt={course.title} />
         <div className="absolute top-4 right-4">
           <LevelBadge level={course.level} />
         </div>
      </div>
      <div className="p-6">
  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
  <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {course.tags.map(tag => (
            <span key={tag} className="bg-gray-700 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};

export default CourseCard;