import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Course } from '../types';
import { useTranslation } from 'react-i18next';

interface CourseDetailsProps {
  course: Course;
}

interface GeneratedContent {
  detailedDescription: string;
  curriculum: string[];
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  const [details, setDetails] = useState<GeneratedContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      setDetails(null);

      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const langName = i18n.language === 'es' ? 'Spanish' : 'English';

        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: `For a course titled "${course.title}" described as "${course.description}", generate a more detailed description (around 100 words) and a sample 5-module curriculum. Please respond in ${langName}.`,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                detailedDescription: {
                  type: Type.STRING,
                  description: "A detailed description of the course, around 100 words."
                },
                curriculum: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.STRING
                  },
                  description: "An array of 5 strings, each representing a module in the curriculum."
                }
              },
              required: ["detailedDescription", "curriculum"],
            }
          }
        });

        const jsonStr = response.text.trim();
        const parsedDetails = JSON.parse(jsonStr);
        setDetails(parsedDetails);

      } catch (e) {
        console.error("Failed to fetch course details:", e);
        setError("error_loading_course_details");
      } finally {
        setLoading(false);
      }
    };

    if (course) {
      fetchDetails();
    }
  }, [course, i18n.language]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-400 text-center py-10">{t('error_loading_course_details')}</p>;
  }

  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-300 mt-6 mb-2">{t('about_this_course')}</h4>
      <p className="text-gray-400">{details?.detailedDescription}</p>

      <h4 className="text-lg font-semibold text-gray-300 mt-6 mb-2">{t('sample_curriculum')}</h4>
      <ul className="space-y-3 list-decimal list-inside text-gray-400">
        {details?.curriculum.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;