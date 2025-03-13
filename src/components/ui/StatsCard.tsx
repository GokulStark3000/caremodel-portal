
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import FadeIn from '../animations/FadeIn';

interface StatsCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  delay?: number;
}

const StatsCard = ({ 
  value, 
  label, 
  prefix = '', 
  suffix = '', 
  className,
  delay = 0 
}: StatsCardProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // animation duration in ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const easeOutQuad = (t: number) => t * (2 - t);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(Math.floor(progress * value));
      
      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <FadeIn delay={delay} className="w-full">
      <div className={cn(
        "p-6 rounded-2xl glass text-center hover-lift",
        className
      )}>
        <h3 className="text-3xl md:text-4xl font-bold mb-2 text-healthcare-600">
          {prefix}{count.toLocaleString()}{suffix}
        </h3>
        <p className="text-muted-foreground font-medium">{label}</p>
      </div>
    </FadeIn>
  );
};

export default StatsCard;
