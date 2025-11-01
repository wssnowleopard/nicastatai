import React from 'react';
import { useTranslation } from 'react-i18next';
import { COURSES } from '../constants';
import CourseCard from './CourseCard';
import { Course } from '../types';

interface CourseListProps {
  onCourseSelect: (course: Course) => void;
}

const CourseList: React.FC<CourseListProps> = ({ onCourseSelect }) => {
  const { t } = useTranslation();
  return (
    <section id="courses" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('courses_section_title')}</h2>
          <p className="mt-4 text-lg text-gray-400">{t('courses_section_subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map(course => (
            <CourseCard key={course.id} course={course} onSelect={() => onCourseSelect(course)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;