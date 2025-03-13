
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../animations/FadeIn';

interface DiseaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  route: string;
  className?: string;
  delay?: number;
}

const DiseaseCard = ({ title, description, icon, route, className, delay = 0 }: DiseaseCardProps) => {
  return (
    <FadeIn delay={delay} className="w-full">
      <div className={cn(
        "p-6 rounded-2xl glass hover-lift flex flex-col h-full",
        className
      )}>
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-healthcare-100 text-healthcare-600 mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-balance mb-6 flex-grow">{description}</p>
        <Button asChild className="mt-auto w-full sm:w-auto bg-healthcare-600 hover:bg-healthcare-700">
          <Link to={route} className="flex items-center justify-center">
            Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </FadeIn>
  );
};

export default DiseaseCard;
