import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="John Doe" className="rounded-full w-48 h-48 object-cover mx-auto" />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-4">
              Hi, I'm John Doe, a passionate full stack web developer with 5 years of experience in creating beautiful and functional web applications. I specialize in React.js, Node.js, and modern web technologies.
            </p>
            <p className="text-gray-600 mb-4">
              My journey in web development started with a curiosity for creating interactive websites, and it has grown into a fulfilling career where I constantly learn and apply new technologies to solve real-world problems.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring new hiking trails, reading tech blogs, or contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;