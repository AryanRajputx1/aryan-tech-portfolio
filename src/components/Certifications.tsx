
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "CompTIA A+",
      organization: "CompTIA",
      date: "May 2021",
      id: "COMP001-123456",
      skills: ["Hardware Troubleshooting", "Operating Systems", "Networking", "Security", "Mobile Devices"]
    },
    {
      name: "ITIL Foundation",
      organization: "Axelos",
      date: "September 2021",
      id: "ITIL-F-789012",
      skills: ["IT Service Management", "ITIL Framework", "Service Strategy", "Service Design", "Continuous Improvement"]
    },
    {
      name: "Cloud Computing (In Progress)",
      organization: "Microsoft",
      date: "Expected December 2025",
      id: "In Progress",
      skills: ["Cloud Services", "Azure", "Cloud Security", "Virtualization", "Cloud Storage"]
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-2 bg-tech"></div>
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-6 w-6 text-tech mr-2" />
                  <h3 className="text-xl font-bold text-navy">{cert.name}</h3>
                </div>
                
                <p className="text-gray-700 font-medium mb-1">{cert.organization}</p>
                
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{cert.date}</span>
                </div>
                
                <p className="text-sm text-gray-500 mb-4">
                  Certificate ID: {cert.id}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {cert.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="bg-gray-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
