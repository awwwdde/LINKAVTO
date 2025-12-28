import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface MarqueeProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
}

const Marquee = ({ items, speed = 50, direction = 'left' }: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || items.length === 0) return;

    const content = contentRef.current;
    const totalWidth = content.scrollWidth;
    const halfWidth = totalWidth / 2; 

    const duration = halfWidth / speed;
    const isLeft = direction === 'left';
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'none', duration }
    });

    if (isLeft) {
      tl.set(content, { x: 0 });
      tl.to(content, { x: -halfWidth });
    } else {
      tl.set(content, { x: -halfWidth });
      tl.to(content, { x: 0 });
    }

    return () => {
      tl.kill();
    };
  }, [items, speed, direction]);

  const duplicatedItems = [...items, ...items];

  return (
    <div
      ref={containerRef}
      // ИСПРАВЛЕНО: mt-5 задает 20px отступа от верхнего блока на мобильных
      className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 py-4 sm:py-5 md:py-6 mt-5 sm:mt-4 md:mt-6 lg:mt-[30px]"
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
      
      <div
        ref={contentRef}
        className="flex items-center whitespace-nowrap w-max"
        style={{ willChange: 'transform' }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={`${index}-${item}`}
            className="text-white text-sm sm:text-base md:text-lg lg:text-[18px] xl:text-[20px] font-semibold flex-shrink-0 px-4 sm:px-6 md:px-8 lg:px-12 tracking-wide transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;