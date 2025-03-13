
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

interface ModelResultsLayoutProps {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  diseaseRoute: string;
}

const ModelResultsLayout = ({ 
  children, 
  title, 
  icon, 
  diseaseRoute 
}: ModelResultsLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="mb-8 flex items-center">
              <Link to="/" className="text-healthcare-600 hover:text-healthcare-700">Home</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <Link to={diseaseRoute} className="text-healthcare-600 hover:text-healthcare-700">{title}</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-muted-foreground">Model Results</span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-healthcare-100 flex items-center justify-center text-healthcare-600">
                {icon}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{title} Model Results & Analysis</h1>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="glass p-8 rounded-2xl mb-8">
              {children}
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <Button asChild variant="outline" className="border-healthcare-200 text-healthcare-700">
                <Link to={diseaseRoute} className="flex items-center">
                  <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to {title} Information
                </Link>
              </Button>
              
              <Button asChild className="bg-healthcare-600 hover:bg-healthcare-700">
                <Link to={`${diseaseRoute}/predict`} className="flex items-center">
                  Try Prediction Model <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModelResultsLayout;
