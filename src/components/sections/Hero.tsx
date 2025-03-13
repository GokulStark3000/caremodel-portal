
import React from 'react';
import { ArrowDownIcon, MicroscopeIcon } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-28 pb-20 flex items-center relative overflow-hidden px-6 md:px-10"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-healthcare-100 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-teal-100 rounded-full filter blur-3xl opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-6">
              <MicroscopeIcon className="h-10 w-10 text-healthcare-600" />
              <span className="text-3xl font-bold">MedML</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Using ML Models to Create <span className="text-healthcare-600">Predictive Diagnosis Model</span> for Genetic Disease
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our cutting-edge machine learning models provide unprecedented accuracy in diagnosing conditions and recommending personalized treatment plans.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#diseases" 
                className="px-8 py-3 rounded-full border border-healthcare-200 text-healthcare-700 font-medium hover:bg-healthcare-50 transition-colors text-center flex items-center justify-center gap-2"
              >
                Explore Diseases <ArrowDownIcon size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
