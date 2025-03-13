
import React from 'react';
import { BrainCircuitIcon, HeartPulseIcon, BarChartIcon, ShieldCheckIcon, MicroscopeIcon, UsersIcon } from 'lucide-react';
import ModelCard from '../ui/ModelCard';
import FadeIn from '../animations/FadeIn';

const features = [
  {
    title: 'Diagnostic Predictions',
    description: 'Our models analyze patient data to provide highly accurate diagnostic predictions across a wide range of conditions.',
    icon: <BrainCircuitIcon size={24} />,
  },
  {
    title: 'Treatment Recommendations',
    description: 'Receive personalized treatment recommendations based on patient history, genetic factors, and current medical standards.',
    icon: <HeartPulseIcon size={24} />,
  },
  {
    title: 'Outcome Analysis',
    description: 'Predict patient outcomes for different treatment options using comprehensive statistical models and historical data.',
    icon: <BarChartIcon size={24} />,
  },
  {
    title: 'Data Security',
    description: 'All patient data is secured with enterprise-grade encryption and complies with HIPAA and other regulatory standards.',
    icon: <ShieldCheckIcon size={24} />,
  },
  {
    title: 'Research Integration',
    description: 'Stay updated with the latest clinical research automatically integrated into our predictive algorithms.',
    icon: <MicroscopeIcon size={24} />,
  },
  {
    title: 'Multi-Specialty Support',
    description: 'Our platform supports various medical specialties including cardiology, oncology, neurology, and more.',
    icon: <UsersIcon size={24} />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-10 bg-healthcare-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full bg-healthcare-100 text-healthcare-700 font-medium text-sm mb-6">
              Key Features
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced ML Capabilities for Healthcare
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform leverages cutting-edge machine learning algorithms specifically designed for healthcare applications.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ModelCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={100 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
