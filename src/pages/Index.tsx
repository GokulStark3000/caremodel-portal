
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import DiseaseCard from '@/components/ui/DiseaseCard';
import { HeartPulse, Droplet, Brain, Weight } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Disease Selection Section */}
        <section id="diseases" className="py-20 px-6 md:px-10 bg-gradient-to-b from-white to-healthcare-50">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Select a Health Condition</h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Our advanced machine learning models provide accurate prediction and analysis for various health conditions.
                Select one to learn more about the condition and how our ML models can help.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <DiseaseCard 
                title="Diabetes" 
                description="Predict diabetes risk based on various health parameters using our advanced predictive model."
                icon={<Droplet size={28} />}
                route="/disease/diabetes"
                delay={100}
              />
              
              <DiseaseCard 
                title="Hypertension" 
                description="Analyze hypertension risk factors and get personalized insights for blood pressure management."
                icon={<HeartPulse size={28} />}
                route="/disease/hypertension"
                delay={200}
              />
              
              <DiseaseCard 
                title="Stroke" 
                description="Assess stroke risk based on medical history and lifestyle factors with high accuracy."
                icon={<Brain size={28} />}
                route="/disease/stroke"
                delay={300}
              />
              
              <DiseaseCard 
                title="Obesity" 
                description="Understand obesity risk factors and get personalized recommendations for weight management."
                icon={<Weight size={28} />}
                route="/disease/obesity"
                delay={400}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
