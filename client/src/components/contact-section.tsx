import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    alert('Thank you for your message! This is a demo form.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-slate-400 mb-12">
            I'm always interested in new opportunities and challenging projects. 
            Let's discuss how we can bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Card className="bg-slate-800 border-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-400 h-6 w-6" />
              </Card>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-slate-400 hover:text-blue-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>

            <div className="text-center">
              <Card className="bg-slate-800 border-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="text-blue-400 h-6 w-6" />
              </Card>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                {contactInfo.linkedin}
              </a>
            </div>

            <div className="text-center">
              <Card className="bg-slate-800 border-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="text-blue-400 h-6 w-6" />
              </Card>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                {contactInfo.github}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-slate-800 border-slate-700 text-slate-50 placeholder-slate-400 focus:border-blue-400"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-800 border-slate-700 text-slate-50 placeholder-slate-400 focus:border-blue-400"
              />
            </div>
            <div className="mb-6">
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-slate-800 border-slate-700 text-slate-50 placeholder-slate-400 focus:border-blue-400"
              />
            </div>
            <div className="mb-6">
              <Textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-800 border-slate-700 text-slate-50 placeholder-slate-400 focus:border-blue-400 resize-none"
              />
            </div>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold w-full md:w-auto"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
