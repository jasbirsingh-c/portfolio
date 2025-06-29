import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '@/lib/data';

const techColorClasses = {
  Python: 'bg-blue-600 text-blue-100',
  Django: 'bg-green-600 text-green-100',
  JavaScript: 'bg-yellow-600 text-yellow-100',
  'Node.js': 'bg-green-600 text-green-100',
  MySQL: 'bg-orange-600 text-orange-100',
  AWS: 'bg-amber-600 text-amber-100',
  PHP: 'bg-purple-600 text-purple-100',
  Laravel: 'bg-red-600 text-red-100',
  Docker: 'bg-blue-600 text-blue-100',
  Jenkins: 'bg-green-600 text-green-100',
  Linux: 'bg-yellow-600 text-yellow-100',
  'AWS ECS': 'bg-amber-600 text-amber-100',
  FastAPI: 'bg-green-600 text-green-100',
  Redis: 'bg-red-600 text-red-100',
  'AWS Lambda': 'bg-amber-600 text-amber-100'
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} className="bg-slate-900 border-slate-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <i className={`${project.icon} text-6xl text-white opacity-50`}></i>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      className={`${techColorClasses[tech as keyof typeof techColorClasses] || 'bg-slate-600 text-slate-100'} px-3 py-1 rounded-full text-sm`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="link" className="text-slate-400 hover:text-slate-300 p-0">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="link" className="text-blue-400 hover:text-blue-300 text-lg p-0">
            <span>View All Projects</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
