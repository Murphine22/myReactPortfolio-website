import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">John Doe</h1>
        <p className="text-xl md:text-2xl mb-8">Full Stack Web Developer</p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition duration-300">
            Contact Me
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-indigo-200"><Github size={24} /></a>
          <a href="#" className="text-white hover:text-indigo-200"><Linkedin size={24} /></a>
          <a href="#" className="text-white hover:text-indigo-200"><Mail size={24} /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;