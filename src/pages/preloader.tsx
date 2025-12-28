import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const path1 = path1Ref.current;
      const path2 = path2Ref.current;
      if (!path1 || !path2) return;
      const path1Length = path1.getTotalLength();
      const path2Length = path2.getTotalLength();
      gsap.set(path1, {
        strokeDasharray: path1Length,
        strokeDashoffset: path1Length,
        fill: 'none',
        stroke: '#272526',
        strokeWidth: '2'
      });

      gsap.set(path2, {
        strokeDasharray: path2Length,
        strokeDashoffset: path2Length,
        fill: 'none',
        stroke: '#272526',
        strokeWidth: '2'
      });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
            onComplete: () => setIsLoaded(true)
          });
        }
      });
      tl.to(path1, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut'
      })
      .to(path2, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut'
      }, '-=0.5')
      .to([path1, path2], {
        fill: '#272526',
        duration: 0.8,
        ease: 'power2.inOut'
      }, '-=0.3');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (isLoaded) return null;

  return (
    <div ref={containerRef} style={styles.overlay}>
      <svg
        ref={svgRef}
        width="300"
        height="220"
        viewBox="0 0 629 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[70vw] max-w-[400px] h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          ref={path1Ref}
          d="M260.203 0H373.394C384.878 0 392.103 12.3778 386.455 22.3771L194.324 362.528C191.103 368.231 195.223 375.29 201.773 375.29C204.826 375.29 207.648 373.663 209.177 371.02L327.451 166.639C330.132 162.005 335.08 159.152 340.434 159.152H457.57C469.102 159.152 476.321 171.623 470.577 181.623L315.011 452.471C312.335 457.128 307.374 460 302.003 460H15.0221C3.51101 460 -3.71027 447.57 1.99148 437.57L247.172 7.57011C249.841 2.88963 254.815 0 260.203 0Z"
          fill="none"
          stroke="#272526"
          strokeWidth="2"
        />
        <path
          ref={path2Ref}
          d="M549.128 317.79H433.42C421.916 317.79 414.694 330.206 420.381 340.205L484.193 452.415C486.86 457.104 491.838 460 497.232 460H613.337C624.858 460 632.078 447.55 626.356 437.55L562.147 325.34C559.475 320.671 554.508 317.79 549.128 317.79Z"
          fill="none"
          stroke="#272526"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  }
};

export default Preloader;