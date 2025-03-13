
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

interface PredictionLayoutProps {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  diseaseRoute: string;
}

const PredictionLayout = ({ 
  children, 
  title, 
  icon, 
  diseaseRoute 
}: PredictionLayoutProps) => {
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
              <span className="text-muted-foreground">Prediction</span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-healthcare-100 flex items-center justify-center text-healthcare-600">
                {icon}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{title} Risk Prediction</h1>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="glass p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-semibold mb-6">Enter Your Information</h2>
              <p className="text-muted-foreground mb-8">
                Please provide the following information to get a personalized risk assessment. 
                All data is processed locally and not stored on any server.
              </p>
              
              {children}
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <Button asChild variant="outline" className="border-healthcare-200 text-healthcare-700">
              <Link to={diseaseRoute} className="flex items-center">
                <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to {title} Information
              </Link>
            </Button>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PredictionLayout;
