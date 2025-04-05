
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Contact Information</h3>
            <p className="text-gray-700 mb-8">
              I'm always open to discussing new opportunities, projects, or just chatting about technology.
              Feel free to reach out through the contact form or via my social profiles.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-tech-light/20 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-tech-dark" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:aryan.rajput@example.com" className="text-navy-dark hover:text-tech-dark transition-colors">
                    aryan.rajput@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-tech-light/20 p-3 rounded-full mr-4">
                  <Linkedin className="h-6 w-6 text-tech-dark" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-navy-dark hover:text-tech-dark transition-colors">
                    linkedin.com/in/aryan-rajput
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Message subject" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} required />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
