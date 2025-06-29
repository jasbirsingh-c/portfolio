import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/lib/data';

const colorClasses = {
  blue: 'text-blue-400 group-hover:animate-float',
  purple: 'text-purple-400 group-hover:animate-float', 
  orange: 'text-orange-400 group-hover:animate-float',
  yellow: 'text-yellow-400 group-hover:animate-float',
  amber: 'text-amber-400 group-hover:animate-float',
  green: 'text-green-400 group-hover:animate-float'
};

const badgeColorClasses = {
  blue: 'bg-blue-600 text-blue-100',
  purple: 'bg-purple-600 text-purple-100',
  orange: 'bg-orange-600 text-orange-100', 
  yellow: 'bg-yellow-600 text-yellow-100',
  amber: 'bg-amber-600 text-amber-100',
  green: 'bg-green-600 text-green-100'
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors group">
              <CardContent className="p-8">
                <div className={`text-4xl mb-4 ${colorClasses[skill.color as keyof typeof colorClasses]}`}>
                  <i className={skill.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                <p className="text-slate-400 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      className={`${badgeColorClasses[skill.color as keyof typeof badgeColorClasses]} px-3 py-1 rounded-full text-sm`}
                    >
                      {tech}
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
}
