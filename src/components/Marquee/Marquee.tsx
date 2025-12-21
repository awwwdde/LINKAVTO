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
      className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 py-6 mt-[30px]"
    >
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
      
      <div
        ref={contentRef}
        className="flex items-center whitespace-nowrap w-max"
        style={{ willChange: 'transform' }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={`${index}-${item}`}
            className="text-white text-[18px] md:text-[20px] font-semibold flex-shrink-0 px-12 tracking-wide transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;