
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Administrative Coordinator",
      company: "The Brick",
      location: "Mississauga, Canada",
      period: "January 2025 - Present",
      description: [
        "Organize the stock of office supplies and place orders as needed",
        "Oversee day-to-day administrative tasks, such as scheduling",
        "Determine solutions to administrative problems",
        "Develop and implement administrative systems",
        "Design and monitor instructional sessions for new software and office procedures, boosting team productivity",
        "Troubleshoot and resolve various administrative issues, improving workflow and team productivity"
      ]
    },
    {
      title: "IT Support Specialist",
      company: "1Valet",
      location: "Mississauga, Canada",
      period: "May 2024 - January 2025",
      description: [
        "Set up and configured LAN/WAN networks, optimizing network performance across multiple locations",
        "Assisted in system performance optimization and user support for web servers and workstations",
        "Performed routine network startup and ensured systems ran well",
        "Diagnosed and resolved network connectivity issues using tools like ping, tracert, and netstat",
        "Delivered Level 1 support for desktops, workstations, and network devices for Managers and client Executives"
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
