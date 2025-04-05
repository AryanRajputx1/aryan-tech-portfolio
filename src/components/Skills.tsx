
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Monitor, Network, Lock, Code, Terminal, Briefcase } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: "os",
      label: "Operating Systems",
      icon: <Monitor className="h-4 w-4" />,
      skills: [
        { name: "Windows", level: 95 },
        { name: "macOS", level: 90 },
        { name: "Linux", level: 85 }
      ]
    },
    {
      id: "network",
      label: "Networking",
      icon: <Network className="h-4 w-4" />,
      skills: [
        { name: "TCP/IP", level: 90 },
        { name: "DHCP & DNS", level: 85 },
        { name: "VLANs", level: 80 },
        { name: "Firewalls", level: 85 },
        { name: "McAfee AV", level: 80 },
        { name: "Wireshark", level: 75 }
      ]
    },
    {
      id: "security",
      label: "Security & Access",
      icon: <Lock className="h-4 w-4" />,
      skills: [
        { name: "Multi-factor Authentication", level: 90 },
        { name: "LAPS", level: 85 },
        { name: "MS Office & SharePoint", level: 85 }
      ]
    },
    {
      id: "tools",
      label: "IT Support Tools",
      icon: <Briefcase className="h-4 w-4" />,
      skills: [
        { name: "Jira ServiceDesk", level: 90 },
        { name: "SQL", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "Notion", level: 85 },
        { name: "Slack", level: 95 }
      ]
    },
    {
      id: "scripting",
      label: "Scripting & Automation",
      icon: <Code className="h-4 w-4" />,
      skills: [
        { name: "PowerShell", level: 80 },
        { name: "Bash", level: 75 },
        { name: "Python", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <Tabs defaultValue="os" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                <span className="hidden md:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-navy mb-6 text-center">{category.label}</h3>
                {category.skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            I specialize in system optimization, security protocols, and efficient ticketing systems management.
            My technical skills are continuously evolving through hands-on experience and professional development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
