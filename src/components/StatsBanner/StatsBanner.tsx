import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !statsRef.current) return;
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
    if (imageRef.current) {
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
    }
    if (stat1Ref.current && stat2Ref.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(stat1Ref.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
        .fromTo(stat2Ref.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full relative mt-[50px]" data-header-theme="dark">
      <div className="relative w-[1720px] h-[650px] rounded-[15px] overflow-hidden mx-auto flex items-stretch">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=600&fit=crop"
          alt="Автомобили"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div ref={statsRef} className="absolute bottom-[40px] left-[40px] z-10 flex flex-row items-start gap-10">
          <div ref={stat1Ref} className="flex flex-col justify-start">
            <span className="text-white text-[40px] font-bold">1%</span>
            <span className="text-white text-[16px] font-medium">минимальная комиссия</span>
          </div>
          <div className="w-[1px] bg-white h-[65px] self-center"></div>
          <div ref={stat2Ref} className="flex flex-col justify-start">
            <span className="text-white text-[40px] font-bold">48ч</span>
            <span className="text-white text-[16px] font-medium">до первых продаж</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;

