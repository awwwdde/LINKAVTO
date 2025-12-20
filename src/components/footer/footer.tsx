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
    <footer className="w-full bg-white border-t border-gray-200 py-8 mt-[100px]">
      <div className="w-full max-w-[1720px] mx-auto px-5 relative flex items-center justify-between">
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <img
            src={headerLogo}
            alt="LINKAVTO"
            className="h-auto max-h-[50px] w-auto"
          />
          <span className="text-black text-[14px] font-medium">
            LINKAVTO 2025. ALL RESERVED
          </span>
        </div>
        <div className="ml-auto flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://tenchat.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-[14px] font-bold hover:text-[#89BEE8] transition-colors duration-300"
            >
              TENCHAT
            </a>
            <a
              href="https://t.me/Ilya_Feok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-[14px] font-bold hover:text-[#89BEE8] transition-colors duration-300"
            >
              TELEGRAM
            </a>
            <a
              href="https://productradar.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-[14px] font-bold hover:text-[#89BEE8] transition-colors duration-300"
            >
              PRODUCT RADAR
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="bg-[#000000] text-white p-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-[#89BEE8] hover:text-black flex items-center justify-center"
            aria-label="Прокрутить вверх"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

