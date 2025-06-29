import { Linkedin, Github, Twitter } from 'lucide-react';
import { developerInfo } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 py-8 border-t border-slate-700">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-400">
          © {currentYear} {developerInfo.fullName}. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
