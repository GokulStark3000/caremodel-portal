
import React from 'react';
import { BrainIcon, UserIcon, HeartPulseIcon, BadgeCheckIcon } from 'lucide-react';
import StatsCard from '../ui/StatsCard';
import FadeIn from '../animations/FadeIn';

const stats = [
  { value: 99.2, label: 'Accuracy Rate', suffix: '%' },
  { value: 500, label: 'Healthcare Professionals', suffix: '+' },
  { value: 50, label: 'Research Publications', suffix: '+' },
  { value: 1000000, label: 'Data Points Analyzed', suffix: '+' },
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'AI Research Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'Dr. Michael Lee',
    role: 'Medical Director',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'Dr. Emma Wilson',
    role: 'Data Science Director',
    image: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'Dr. James Rodriguez',
    role: 'Clinical Implementation Lead',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <FadeIn>
              <div className="inline-block px-4 py-1.5 rounded-full bg-healthcare-100 text-healthcare-700 font-medium text-sm mb-6">
                About Our Platform
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advancing Healthcare Through Machine Learning
              </h2>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of medical experts and AI researchers have developed a platform that revolutionizes how healthcare decisions are made. By combining vast medical datasets with advanced machine learning algorithms, we provide insights that were previously impossible.
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-healthcare-100 flex items-center justify-center flex-shrink-0">
                    <BrainIcon className="text-healthcare-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Advanced AI Algorithms</h3>
                    <p className="text-muted-foreground">
                      Our models use state-of-the-art deep learning techniques specifically optimized for medical data.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-healthcare-100 flex items-center justify-center flex-shrink-0">
                    <UserIcon className="text-healthcare-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Expert-Led Development</h3>
                    <p className="text-muted-foreground">
                      Every model is developed with guidance from leading medical specialists and researchers.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-healthcare-100 flex items-center justify-center flex-shrink-0">
                    <HeartPulseIcon className="text-healthcare-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Patient-Centered Approach</h3>
                    <p className="text-muted-foreground">
                      We design all our solutions with the ultimate goal of improving patient outcomes and experiences.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={200} direction="left">
            <div className="relative">
              <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-healthcare-400/20 to-teal-400/20 filter blur-xl transform translate-x-4 translate-y-4"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Medical team using ML platform" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 glass p-4 rounded-lg shadow-glass animate-float">
                <div className="flex items-center gap-3">
                  <BadgeCheckIcon className="text-healthcare-600" size={24} />
                  <div>
                    <p className="text-sm font-medium">FDA</p>
                    <p className="text-healthcare-600 font-bold">Approved</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <div className="mb-24">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                By the Numbers
              </h2>
            </FadeIn>
            
            <FadeIn delay={100}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform has already made a significant impact in the healthcare industry.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={100 * index}
              />
            ))}
          </div>
        </div>
        
        <div>
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Our Team
              </h2>
            </FadeIn>
            
            <FadeIn delay={100}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our interdisciplinary team combines expertise in AI, medicine, and data science.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={100 * index}>
                <div className="glass hover-lift rounded-2xl overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
