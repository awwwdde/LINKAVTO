import { ArrowUp } from 'lucide-react';
import headerLogo from '../../img/header.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-4 sm:py-6 md:py-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-[100px]">
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-5 relative flex flex-col items-center justify-center gap-4 sm:gap-6 md:flex-row md:justify-between md:gap-4">
        <div className="flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 order-2 md:absolute md:left-1/2 md:-translate-x-1/2 md:z-10">
          <img
            src={headerLogo}
            alt="LINKAVTO"
            className="h-auto max-h-[35px] sm:max-h-[40px] md:max-h-[50px] w-auto"
          />
          <span className="text-black text-[10px] sm:text-xs md:text-[14px] font-medium text-center">
            LINKAVTO 2025. ALL RESERVED
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto justify-center md:justify-end md:ml-auto order-1 md:order-2">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center">
            <a
              href="https://tenchat.ru/5050613"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-[10px] sm:text-xs md:text-[14px] font-medium hover:text-[#89BEE8] transition-colors duration-300"
            >
              TENCHAT
            </a>
            <a
              href="https://t.me/Ilya_Feok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-[10px] sm:text-xs md:text-[14px] font-medium hover:text-[#89BEE8] transition-colors duration-300"
            >
              TELEGRAM
            </a>
            <a
              href="https://productradar.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-[10px] sm:text-xs md:text-[14px] font-medium hover:text-[#89BEE8] transition-colors duration-300"
            >
              PRODUCT RADAR
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="bg-[#000000] text-white p-1.5 sm:p-2 md:p-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-[#89BEE8] hover:text-black flex items-center justify-center"
            aria-label="Прокрутить вверх"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

