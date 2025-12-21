import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GoalsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !textRef.current) return;

    // Анимация заголовка
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Анимация текста с эффектом появления по словам
    const words = textRef.current.textContent?.split(' ') || [];
    textRef.current.innerHTML = words
      .map((word) => `<span style="opacity: 0;">${word}</span>`)
      .join(' ');

    const wordSpans = textRef.current.querySelectorAll('span');

    gsap.to(wordSpans, {
      opacity: 1,
      duration: 0.3,
      stagger: 0.02,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-[1720px] mx-auto px-5 mt-[100px]">
      <div className="flex items-start relative">
        <div ref={titleRef} className="text-[#7A7A7A] text-[24px] font-semibold leading-tight absolute left-0">
          Цели
        </div>
        <div className="w-[650px] mx-auto">
          <p ref={textRef} className="text-black text-[16px] font-medium text-justify leading-tight">
            Смысл нашего маркетплейса — сделать покупку запчастей для любого вида техники простой,
            быстрой и предсказуемой. Мы объединяем проверенных продавцов запчастей для авто,
            мотоциклов, грузовой и специальной техники в одном цифровом пространстве, где вы
            находите нужную деталь без лишних поисков, рисков и потери времени. Мы стремимся
            сократить путь от потребности до решения: прозрачные предложения, актуальное наличие,
            понятные условия и удобный выбор позволяют вам сосредоточиться на главном — эксплуатации
            и развитии бизнеса или личного транспорта. Маркетплейс создан, чтобы вы были уверены в
            результате каждой покупки и возвращались снова, зная, что здесь запчасти работают на
            вас.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;

