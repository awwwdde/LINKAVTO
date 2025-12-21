import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { title: 'Ошибки подбора', desc: 'Сводим риск покупки неподходящей детали к нулю.' },
  { title: 'Скрытые наценки', desc: 'Честная цена напрямую от продавца без посредников.' },
  { title: 'Потеря времени', desc: 'Все надежные поставщики уже собраны в одном месте.' },
  { title: 'Недоверие', desc: 'Проверяем каждого продавца и качество каждой запчасти.' },
];

const GoalsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
      gsap.from('.problem-card', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.problems-grid',
          start: 'top 90%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-[1720px] mx-auto px-6 py-24 md:py-32 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 mb-20 border-b border-gray-100 pb-12">
        <div className="text-[#7A7A7A] text-[16px] font-medium w-full md:w-1/3">
          О проекте
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-black mb-6">
            LinkAvto - это мост между вами и правильной деталью.
          </h2>
          <p className="text-[16px] font-medium text-[#7A7A7A] leading-relaxed max-w-2xl">
            Мы превратили сложный процесс поиска автозапчастей в простой и интуитивный сервис, 
            сделав его таким же доступным, как заказ такси.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter italic">Цели</span>
          <h3 className="text-[20px] font-medium">Порядок вместо хаоса</h3>
          <p className="text-[#7A7A7A] text-[16px] font-medium">
            Рынок запчастей — это лабиринт. Мы здесь, чтобы навести в нем порядок и избавить вас от бесконечных звонков и сомнений.
          </p>
        </div>
        <div className="md:col-span-2 flex flex-col gap-8">
          <span className="text-xs font-bold text-red-500 uppercase tracking-tighter italic text-right md:text-left">Решения</span>
          <div className="problems-grid grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {problems.map((p, i) => (
              <div key={i} className="problem-card group border-l border-gray-100 pl-6 hover:border-black transition-colors duration-500">
                <h4 className="font-bold text-black mb-2 text-[16px]">{p.title}</h4>
                <p className="text-[#7A7A7A] text-[16px] font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-32 pt-12 border-t border-black flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="">
          <h3 className="text-[24px] mb-2 font-semibold">Наша Миссия</h3>
        </div>
        <div className="max-w-xl">
          <p className="text-black text-[24px] font-medium leading-tight">
            «Создать прозрачную среду, где покупка запчастей приносит уверенность, а бизнес работает без барьеров».
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;