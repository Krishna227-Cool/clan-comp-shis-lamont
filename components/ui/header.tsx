'use client'
// Header.tsx
import { useState, useEffect } from 'react';
import Logo from './logo';
import MobileMenu from './mobile-menu';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4 cursor-pointer" onClick={() => scrollToSection('top')}>
            <Logo/>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a onClick={() => scrollToSection('ai')} className="cursor-pointer text-gray-800 hover:text-gray-600">AI</a>
            <a onClick={() => scrollToSection('tie')} className="cursor-pointer text-gray-800 hover:text-gray-600">Technology Integration</a>
            <a onClick={() => scrollToSection('gam')} className="cursor-pointer text-gray-800 hover:text-gray-600">Gamification</a>
            <a onClick={() => scrollToSection('contac')} className="cursor-pointer text-gray-800 hover:text-gray-600">Contact Me</a>
            
            {/* Add more links as needed */}
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

