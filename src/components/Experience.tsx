
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "IT Support Specialist",
      company: "1Valet",
      location: "Ottawa, Canada",
      period: "January 2022 - Present",
      description: [
        "Set up and configured LAN/WAN networks to ensure optimal performance and connectivity",
        "Used tools like ping, tracert, and netstat for TCP/IP troubleshooting and configuration",
        "Provided Level 1 support to executives and team members, resolving hardware and software issues",
        "Optimized network performance by implementing best practices and regular maintenance",
        "Managed user accounts and security access across multiple systems"
      ]
    },
    {
      title: "Administrative Coordinator",
      company: "The Brick",
      location: "Hamilton, Canada",
      period: "March 2019 - December 2021",
      description: [
        "Managed inventory systems and implemented process improvements to increase efficiency",
        "Created and monitored instructional sessions for new software and office procedures",
        "Resolved complex system issues and provided technical support to staff",
        "Coordinated system implementations and upgrades across departments",
        "Improved team productivity through effective troubleshooting and support"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="space-y-8 mt-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-tech shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-navy">{exp.title}</CardTitle>
                    <div className="flex items-center text-gray-700 mt-2">
                      <Briefcase className="h-4 w-4 mr-2 text-tech-dark" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-2 text-tech-dark" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 font-medium">
                    <Calendar className="h-4 w-4 mr-2 text-tech-dark" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-gray-700 pl-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
