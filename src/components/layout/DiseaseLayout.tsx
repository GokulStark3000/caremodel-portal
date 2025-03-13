
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

interface DiseaseLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  icon: React.ReactNode;
  modelName: string;
  modelDescription: string;
  accuracy: string;
  diseaseRoute: string;
}

const DiseaseLayout = ({
  children,
  title,
  description,
  icon,
  modelName,
  modelDescription,
  accuracy,
  diseaseRoute
}: DiseaseLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="mb-8 flex items-center">
              <Link to="/" className="text-healthcare-600 hover:text-healthcare-700">Home</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-muted-foreground">{title}</span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-healthcare-100 flex items-center justify-center text-healthcare-600">
                {icon}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <FadeIn delay={200} className="lg:col-span-2">
              <div className="glass p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4">About {title}</h2>
                <div className="prose max-w-none text-foreground">
                  {description}
                </div>
                {children}
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="glass p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4">Our ML Model</h2>
                <h3 className="text-xl font-medium text-healthcare-600 mb-2">{modelName}</h3>
                <p className="mb-6 text-muted-foreground">{modelDescription}</p>
                
                <div className="mb-8 p-4 bg-healthcare-50 rounded-lg border border-healthcare-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Accuracy:</span>
                    <span className="text-healthcare-700 font-bold">{accuracy}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <Button asChild className="w-full bg-healthcare-600 hover:bg-healthcare-700">
                    <Link to={`${diseaseRoute}/results`}>
                      View Model Results & Analysis
                    </Link>
                  </Button>
                  
                  <Button asChild className="w-full bg-healthcare-600 hover:bg-healthcare-700">
                    <Link to={`${diseaseRoute}/predict`} className="flex items-center justify-center">
                      Try Prediction Model <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiseaseLayout;
