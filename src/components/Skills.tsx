import React from 'react';
import { Code, Server, Database, Palette } from 'lucide-react';

const skillsData = [
  { name: 'Frontend', icon: <Code />, skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { name: 'Backend', icon: <Server />, skills: ['Node.js', 'Express.js', 'Python', 'RESTful APIs'] },
  { name: 'Database', icon: <Database />, skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
  { name: 'Other', icon: <Palette />, skills: ['Git', 'Webpack', 'Jest', 'Agile Methodologies'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-indigo-600 mr-2">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;