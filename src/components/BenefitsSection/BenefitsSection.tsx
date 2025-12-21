import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img3 from '../../img/img3.png';

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const benefits = [
    'Широкая база проверенных поставщиков и покупателей',
    'Прозрачные условия сотрудничества',
    'Быстрая регистрация и начало работы за 48 часов',
    'Удобный интерфейс и профессиональная поддержка',
    'Комиссия 1% от продаж и никаких штрафов, в отличии от других маркетплейсов',
  ];

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;
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
    if (titleRef.current && benefitsRef.current && buttonRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
        .fromTo(
          benefitsRef.current.children,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
          '-=0.2'
        );
    }
  }, []);

  return (
    <section className="w-full max-w-[1720px] mx-auto px-5 mt-[100px]" data-header-theme="dark">
      <div ref={containerRef} className="w-full relative mt-[50px]">
        <div className="relative w-[1720px] h-[500px] rounded-[15px] overflow-hidden mx-auto flex items-stretch">
          <img ref={imageRef} src={img3} alt="Преимущества работы с нами" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <div ref={contentRef} className="absolute inset-0 z-10 flex flex-col justify-center items-start px-[60px] gap-6">
            <div className="flex flex-col gap-4 max-w-[800px]">
              <h2 ref={titleRef} className="text-white text-[20px] font-bold leading-tight">
                Преимущества работы с нами
              </h2>
              <div ref={benefitsRef} className="flex flex-col gap-3 mt-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-[16px] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div ref={buttonRef} className="mt-4">
              <button className="bg-[#89BEE8] text-white text-[16px] font-medium px-6 py-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-[#89BEE8] hover:text-black">
                <a
                  href="https://t.me/Ilya_Feok"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline"
                >
                  Запишитесь на демообзор, чтобы начать работу с нами
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

