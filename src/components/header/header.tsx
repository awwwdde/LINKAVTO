import { useEffect, useState } from 'react';
import headerLogo from '../../img/header.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-[1000] pt-[30px] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-[10px]'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <div className="flex justify-between items-center w-full min-h-[25px] relative">
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <img
            src={headerLogo}
            alt="LINKAVTO"
            className="h-auto max-h-[50px] w-auto"
          />
        </div>
        <nav className="flex gap-[30px] ml-auto mr-[30px] items-center">
          <button
            className="bg-transparent border-none text-black text-base font-medium cursor-pointer px-4 py-2 transition-colors duration-300 whitespace-nowrap hover:text-[#89BEE8]"
            onClick={() => scrollToSection('how-to-buy')}
          >
            Как покупать
          </button>
          <button
            className="bg-transparent border-none text-black text-base font-medium cursor-pointer px-4 py-2 transition-colors duration-300 whitespace-nowrap hover:text-[#89BEE8]"
            onClick={() => scrollToSection('how-to-sell')}
          >
            Как продавать
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
