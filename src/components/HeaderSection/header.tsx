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
      className={`sticky top-0 z-[1000] pt-2 sm:pt-4 md:pt-[30px] pb-1 sm:pb-2 md:pb-4 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-[10px]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full min-h-[20px] sm:min-h-[25px] relative px-3 sm:px-4 md:px-6 lg:px-12 xl:px-[100px] gap-2 md:gap-0">
        <div className="flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2 md:z-10 order-1 md:order-none">
          <img
            src={headerLogo}
            alt="LINKAVTO"
            className={`h-auto max-h-[28px] sm:max-h-[35px] md:max-h-[50px] w-auto transition-all duration-500 ${
              isWhiteText ? 'invert brightness-0' : 'brightness-0'
            }`}
          />
        </div>
        <nav className="flex gap-1 sm:gap-2 md:gap-4 lg:gap-[30px] md:ml-auto items-center justify-center order-2 md:order-none">
          <button
            className={`bg-transparent border-none text-[10px] sm:text-xs md:text-sm lg:text-base font-medium cursor-pointer px-1 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-2 transition-colors duration-500 whitespace-nowrap hover:text-[#89BEE8] ${
              isWhiteText ? 'text-white' : 'text-black'
            }`}
            onClick={() => scrollToSection('how-to-buy')}
          >
            ✦ Как покупать
          </button>
          <button
            className={`bg-transparent border-none text-[10px] sm:text-xs md:text-sm lg:text-base font-medium cursor-pointer px-1 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-2 transition-colors duration-500 whitespace-nowrap hover:text-[#89BEE8] ${
              isWhiteText ? 'text-white' : 'text-black'
            }`}
            onClick={() => scrollToSection('how-to-sell')}
          >
            ✦ Как продавать
          </button>
          <button
            className={`bg-transparent border-none text-[10px] sm:text-xs md:text-sm lg:text-base font-medium cursor-pointer px-1 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-2 transition-colors duration-500 whitespace-nowrap hover:text-[#89BEE8] ${
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
