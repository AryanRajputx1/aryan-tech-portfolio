
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      degree: "Computer Systems Technician – Software Support",
      institution: "Mohawk College",
      location: "Hamilton, Canada",
      period: "2017 - 2019",
      description: "Comprehensive diploma program focused on computer systems troubleshooting, software support, network configuration, and IT service management."
    },
    {
      degree: "Bachelor's in Computer Science (Remote, Ongoing)",
      institution: "Manipal Institute of Technology",
      location: "Remote Learning",
      period: "2023 - Present",
      description: "Currently pursuing advanced knowledge in computer science fundamentals, algorithms, software development, and cloud computing technologies."
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {educationItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-tech mr-3" />
                  <h3 className="text-xl font-bold text-navy">{item.degree}</h3>
                </div>
                
                <div className="flex items-center text-gray-700 mb-2">
                  <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="font-medium">{item.institution}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{item.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{item.period}</span>
                </div>
                
                <p className="text-gray-700">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block border-0 shadow-md bg-gray-50 max-w-xl">
            <CardContent className="pt-6 flex items-center">
              <div className="bg-tech-light/20 rounded-full p-3 mr-4">
                <BookOpen className="h-6 w-6 text-tech-dark" />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-navy mb-1">Language Learning</h4>
                <p className="text-gray-700">
                  Currently learning French to enhance professional communication skills and expand career opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
