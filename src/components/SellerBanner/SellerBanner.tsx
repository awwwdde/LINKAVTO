import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img2 from '../../img/img2.png';

gsap.registerPlugin(ScrollTrigger);

const SellerBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !textRef.current) return;
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
    gsap.fromTo(
      imageRef.current,
      { scale: 1.1 },
      {
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="w-full max-w-[1720px] mx-auto px-4 sm:px-5 mt-12 sm:mt-16 md:mt-20 lg:mt-[100px]" data-header-theme="dark">
      <div ref={containerRef} className="w-full relative mt-6 sm:mt-8 md:mt-12 lg:mt-[50px]">
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-[15px] overflow-hidden mx-auto flex items-stretch">
          <img ref={imageRef} src={img2} alt="Автомобили" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
          <div ref={textRef} className="absolute bottom-4 sm:bottom-6 md:bottom-[40px] left-4 sm:left-6 md:left-[40px] z-10 flex flex-row items-center gap-6 sm:gap-8 md:gap-10">
            <div className="flex flex-col justify-center">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold">Вы продавец?</span>
              <span className="text-white text-sm sm:text-[16px] font-medium">
                Посмотрите как правильно продавать!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerBanner;

