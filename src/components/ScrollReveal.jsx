import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal component that smoothly fades and slides elements into view
 * as the user scrolls down the page.
 */
export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 700 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -40px 0px' 
      }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getInitialStyle = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 scale-100 opacity-100';

    switch (direction) {
      case 'up':
        return 'translate-y-12 opacity-0';
      case 'down':
        return '-translate-y-12 opacity-0';
      case 'left':
        return 'translate-x-12 opacity-0';
      case 'right':
        return '-translate-x-12 opacity-0';
      case 'scale':
        return 'scale-95 opacity-0';
      default:
        return 'translate-y-12 opacity-0';
    }
  };

  return (
    <div
      ref={domRef}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms` 
      }}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] transform will-change-transform ${getInitialStyle()} ${className}`}
    >
      {children}
    </div>
  );
}
