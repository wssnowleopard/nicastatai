import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseList from './components/CourseList';
import Footer from './components/Footer';
import { Course } from './types';
import CourseModal from './components/CourseModal';

const App: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CourseList onCourseSelect={handleSelectCourse} />
      </main>
      <Footer />
      {selectedCourse && <CourseModal course={selectedCourse} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;