import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

const StepCard = ({ stepNumber, title, description }: StepCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const formattedStep = String(stepNumber).padStart(2, '0');

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-[415px] h-[300px] bg-gray-100 flex flex-col gap-4 p-6 rounded-[15px] hover:shadow-lg transition-shadow duration-300"
    >
      <span className="text-black text-[48px] font-bold">{formattedStep}</span>
      <p className="text-black text-[24px] font-medium leading-tight pt-[80px]">{title}</p>
      <p className="text-[#7A7A7A] text-[16px] font-medium leading-tight">{description}</p>
    </div>
  );
};

export default StepCard;

