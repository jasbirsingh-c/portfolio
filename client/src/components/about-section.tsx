import { Card } from '@/components/ui/card';
import { User } from 'lucide-react';
import { developerInfo } from '@/lib/data';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-slate-700 rounded-2xl flex items-center justify-center text-slate-500">
                <User className="h-24 w-24" />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                With over 12 years of experience in full-stack development, I specialize in building robust, 
                scalable web applications that solve real-world problems. My expertise spans from backend 
                architecture using Python, PHP, and JavaScript to cloud infrastructure management with AWS.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I have a passion for clean code, efficient database design, and creating seamless user 
                experiences. My Linux system administration background and extensive JavaScript knowledge 
                enable me to optimize performance from the ground up.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="text-center p-4 bg-slate-900 border-slate-700">
                  <div className="text-2xl font-bold text-blue-400">{developerInfo.stats.projectsCompleted}</div>
                  <div className="text-slate-400">Projects Completed</div>
                </Card>
                <Card className="text-center p-4 bg-slate-900 border-slate-700">
                  <div className="text-2xl font-bold text-green-400">{developerInfo.stats.yearsExperience}</div>
                  <div className="text-slate-400">Years Experience</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
