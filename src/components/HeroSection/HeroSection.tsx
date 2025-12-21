import { useEffect, useRef } from 'react';
import { Trophy } from 'lucide-react';
import { gsap } from 'gsap';
import StatsBanner from '../StatsBanner/StatsBanner';

const HeroSection = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (badgeRef.current) {
      gsap.set(badgeRef.current, { opacity: 0, y: -20 });
      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6 });
    }

    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 30 });
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');
    }

    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
    }

    if (rightTextRef.current) {
      gsap.set(rightTextRef.current, { opacity: 0, x: 30 });
      tl.to(rightTextRef.current, { opacity: 1, x: 0, duration: 0.8 }, '-=0.6');
    }

    if (buttonRef.current) {
      gsap.set(buttonRef.current, { opacity: 0, scale: 0.9 });
      tl.to(buttonRef.current, { opacity: 1, scale: 1, duration: 0.6 }, '-=0.4');
    }
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-start pt-[100px] px-5 scroll-mt-[100px]">
      <div className="w-full max-w-[1720px] mx-auto flex items-stretch">
        <div className="w-[605px] flex flex-col gap-4">
          <div
            ref={badgeRef}
            className="flex items-center gap-2 px-4 py-2 border border-black-300 rounded-full w-[380px]"
          >
            <Trophy className="w-[15px] h-[15px] text-black" />
            <span className="text-black text-sm">
              Маркетплейс №1 для запчастей любого транспорта
            </span>
          </div>
          <div ref={titleRef}>
            <span className="text-black text-[40px] font-bold leading-[105%] tracking-[1.5px]">
              Продавайте и покупайте автозапчасти на удобном маркетплейсе
            </span>
          </div>
          <div ref={subtitleRef} className="mt-0.3">
            <span className="text-[#7A7A7A] text-[16px] font-medium">
              Забудьте про вечный поиск нужного сайта, в LINKAVTO найдется все от разных поставщиков!
            </span>
          </div>
        </div>
        <div className="w-[605px] ml-[415px] mr-5 flex flex-col justify-end">
          <div ref={rightTextRef} className="flex items-center gap-2 mb-5">
            <span className="text-black text-[16px] font-medium text-justify">
              Удобная площадка для покупки необходимых запчастей для вашей техники! Мы работает с
              крупными поставщиками авто/мото техники, а также с грузовым и спец транспортом!
            </span>
          </div>
          <div ref={buttonRef}>
            <button className="bg-[#000000] text-white text-[14px] font-medium px-4 py-2 rounded-full w-[250px] h-[35px] cursor-pointer transition-all duration-300 hover:bg-[#89BEE8]">
              <a href="https://t.me/Ilya_Feok" target="_blank" rel="noreferrer">
                Записаться на демообзор
              </a>
            </button>
          </div>
        </div>
      </div>
      <StatsBanner />
    </section>
  );
};

export default HeroSection;

