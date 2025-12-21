import { useEffect, useState } from 'react';
import headerLogo from '../../img/header.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);

  useEffect(() => {
    const checkBg = () => {
      setIsScrolled(window.scrollY > 0);
      
      const header = document.querySelector('header');
      if (!header) return;
      
      const headerRect = header.getBoundingClientRect();
      const headerMidY = headerRect.top + headerRect.height / 2;
      const darkSections = document.querySelectorAll('[data-header-theme="dark"]');
      let overDark = false;
      
      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (headerMidY >= rect.top && headerMidY <= rect.bottom) {
          overDark = true;
        }
      });
      
      setIsDarkBg(overDark);
    };

    window.addEventListener('scroll', checkBg, { passive: true });
    window.addEventListener('resize', checkBg);
    const timer = setTimeout(checkBg, 100);
    
    return () => {
      window.removeEventListener('scroll', checkBg);
      window.removeEventListener('resize', checkBg);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const isWhiteText = isDarkBg;

  return (
    <header
      className={`sticky top-0 z-[1000] pt-[30px] pb-4 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-[10px]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center w-full min-h-[25px] relative px-[100px]">
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <img
            src={headerLogo}
            alt="LINKAVTO"
            className={`h-auto max-h-[50px] w-auto transition-all duration-500 ${
              isWhiteText ? 'invert brightness-0' : 'brightness-0'
            }`}
          />
        </div>
        <nav className="flex gap-[30px] ml-auto items-center">
          <button
            className={`bg-transparent border-none text-base font-medium cursor-pointer px-4 py-2 transition-colors duration-500 whitespace-nowrap hover:text-[#89BEE8] ${
              isWhiteText ? 'text-white' : 'text-black'
            }`}
            onClick={() => scrollToSection('how-to-buy')}
          >
            ✦ Как покупать
          </button>
          <button
            className={`bg-transparent border-none text-base font-medium cursor-pointer px-4 py-2 transition-colors duration-500 whitespace-nowrap hover:text-[#89BEE8] ${
              isWhiteText ? 'text-white' : 'text-black'
            }`}
            onClick={() => scrollToSection('how-to-sell')}
          >
            ✦ Как продавать
          </button>
          <button
            className={`bg-transparent border-none text-base font-medium cursor-pointer px-4 py-2 transition-colors duration-500 whitespace-nowrap hover:text-[#89BEE8] ${
              isWhiteText ? 'text-white' : 'text-black'
            }`}
          >
           <a href='https://linkavto.ru' target="_blank" rel="noreferrer">✦ Первая версия </a> 
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
