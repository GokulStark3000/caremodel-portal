
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const FadeIn = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 500,
  className = '',
  once = true,
  threshold = 0.1,
}: FadeInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const initialStyles = () => {
      element.style.opacity = '0';
      element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
      element.style.transitionDelay = `${delay}ms`;
      
      switch (direction) {
        case 'up':
          element.style.transform = 'translateY(20px)';
          break;
        case 'down':
          element.style.transform = 'translateY(-20px)';
          break;
        case 'left':
          element.style.transform = 'translateX(20px)';
          break;
        case 'right':
          element.style.transform = 'translateX(-20px)';
          break;
        default:
          break;
      }
    };

    const animate = () => {
      element.style.opacity = '1';
      element.style.transform = 'translate(0, 0)';
    };

    initialStyles();

    // Set up intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            if (once && observerRef.current) {
              observerRef.current.unobserve(element);
            }
          } else if (!once) {
            initialStyles();
          }
        });
      },
      { threshold }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [delay, direction, duration, once, threshold]);

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
};

export default FadeIn;
