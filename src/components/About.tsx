
import React from 'react';
import { Computer, Lightbulb, Users, Trophy } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Computer className="h-8 w-8 text-tech" />,
      title: 'Tech Expertise',
      description: 'Proficient in Windows, macOS, Linux operating systems, networking protocols, and security systems.'
    },
    {
      icon: <Users className="h-8 w-8 text-tech" />,
      title: 'User Support',
      description: 'Dedicated to providing exceptional IT support and problem resolution for executives and team members.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-tech" />,
      title: 'Problem Solver',
      description: 'Skilled at diagnosing and resolving complex system and network issues efficiently.'
    },
    {
      icon: <Trophy className="h-8 w-8 text-tech" />,
      title: 'Certified Professional',
      description: 'CompTIA A+ and ITIL Foundation certified with ongoing education in Cloud Computing.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              I'm an IT Support Specialist with a passion for resolving technical challenges and optimizing system performance. 
              Throughout my career, I've developed expertise in providing hands-on IT support, troubleshooting network connectivity issues,
              and ensuring optimal system performance for organizations.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              My journey in IT began with a strong foundation in computer systems and has evolved to include proficiency 
              in network management, security protocols, and user support. I take pride in my ability to quickly diagnose 
              and resolve complex technical issues while providing exceptional service to end-users.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              I'm committed to continuous learning and staying current with emerging technologies. Currently, I'm expanding 
              my knowledge in Cloud Computing while also learning French to enhance my professional communication skills.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    {item.icon}
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
