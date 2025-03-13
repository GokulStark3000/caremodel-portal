
import { cn } from '@/lib/utils';
import React from 'react';
import FadeIn from '../animations/FadeIn';

interface ModelCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const ModelCard = ({ title, description, icon, className, delay = 0 }: ModelCardProps) => {
  return (
    <FadeIn delay={delay} className="w-full">
      <div className={cn(
        "p-6 rounded-2xl glass hover-lift flex flex-col items-start h-full",
        className
      )}>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-healthcare-100 text-healthcare-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-balance">{description}</p>
      </div>
    </FadeIn>
  );
};

export default ModelCard;
