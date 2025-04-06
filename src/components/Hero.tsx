
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <p className="text-tech-dark font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight">
              Aryan Rajput
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
              IT Support Specialist
            </h2>
            <p className="text-gray-600 text-lg max-w-lg">
              Providing hands-on IT support with expertise in network troubleshooting, 
              system optimization, and software development across Linux, macOS, and Windows environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.linkedin.com/in/aryan-rajput-30496023b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-tech transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:rajputaryan2780@gmail.com" 
                className="text-gray-600 hover:text-tech transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-tech to-blue-600 opacity-10"></div>
              <img 
                src="/lovable-uploads/a2cdb867-e700-4717-82ab-44a34a241881.png"
                alt="Aryan Rajput"
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-tech text-white rounded-full p-4 shadow-lg">
                <code className="text-sm font-mono">&lt;/&gt;</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
