import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import { useScrollToSection } from '@/hooks/use-scroll';
import { developerInfo } from '@/lib/data';

export function HeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-blue-400">{developerInfo.name}</span>{' '}
            <span>{developerInfo.lastName}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
            {developerInfo.description.split(' ').map((word, index) => {
              const colorMap: { [key: string]: string } = {
                'Python': 'text-blue-400',
                'PHP': 'text-green-400', 
                'JavaScript': 'text-yellow-400',
                'MySQL': 'text-orange-400',
                'Linux': 'text-green-400',
                'AWS': 'text-purple-400'
              };
              
              return (
                <span key={index} className={colorMap[word] || ''}>
                  {word}{' '}
                </span>
              );
            })}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              className="border border-slate-600 hover:border-blue-400 text-slate-50 px-8 py-3 rounded-lg font-semibold"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="text-slate-400 hover:text-blue-400"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
