import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StepCard from '../StepCard/StepCard';

gsap.registerPlugin(ScrollTrigger);

interface Step {
  stepNumber: number;
  title: string;
  description: string;
}

interface HowToBuySectionProps {
  steps: Step[];
}

const HowToBuySection = ({ steps }: HowToBuySectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !subtitleRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
  }, []);

  return (
    <section ref={sectionRef} id="how-to-buy" className="w-full max-w-[1720px] mx-auto px-4 sm:px-5 mt-12 sm:mt-16 md:mt-20 lg:mt-[100px]">
      <h2 ref={titleRef} className="text-xl sm:text-2xl md:text-[24px] mb-2 font-semibold">
        Начать покупать — просто
      </h2>
      <p ref={subtitleRef} className="text-sm sm:text-[16px] max-w-[600px] text-left text-[#7A7A7A] mb-6 sm:mb-8">
        Всего 4 шага до первых покупок
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
        {steps.map((step) => (
          <StepCard
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HowToBuySection;

