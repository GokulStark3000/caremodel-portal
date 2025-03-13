
import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <div className="inline-block px-4 py-1.5 rounded-full bg-healthcare-100 text-healthcare-700 font-medium text-sm mb-6">
                Healthcare Machine Learning
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Using ML Models to Create <span className="text-healthcare-600">Predictive Diagnosis Model</span> for Genetic Disease
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Our cutting-edge machine learning models provide unprecedented accuracy in diagnosing conditions and recommending personalized treatment plans.
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#diseases" 
                  className="px-8 py-3 rounded-full border border-healthcare-200 text-healthcare-700 font-medium hover:bg-healthcare-50 transition-colors text-center flex items-center justify-center gap-2"
                >
                  Explore Diseases <ArrowDownIcon size={16} />
                </a>
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full border-2 border-white bg-healthcare-100 flex items-center justify-center text-xs font-semibold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by <span className="font-semibold text-foreground">500+</span> healthcare professionals
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={200} direction="left">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-healthcare-400/20 to-teal-400/20 filter blur-xl"></div>
              <div className="relative glass rounded-2xl p-1 shadow-glass-lg">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Healthcare ML Platform" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 glass p-4 rounded-lg shadow-glass animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-healthcare-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-healthcare-500"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Accuracy</p>
                    <p className="text-healthcare-600 font-bold">99.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
