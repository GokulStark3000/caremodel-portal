
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { MailIcon, PhoneIcon, MapPinIcon, CheckCircleIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import FadeIn from '../animations/FadeIn';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form after delay
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-healthcare-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full bg-healthcare-100 text-healthcare-700 font-medium text-sm mb-6">
              Get in Touch
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Us
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our ML healthcare platform? Reach out to our team.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn delay={300}>
            <Card className="p-8 h-full shadow-subtle border-healthcare-100">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3">Send us a message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-healthcare-600 hover:bg-healthcare-700 text-white"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircleIcon size={18} />
                      Message Sent
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </Card>
          </FadeIn>
          
          <FadeIn delay={400} direction="left">
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Contact Information</h3>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels or visit our office.
                </p>
              </div>
              
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-healthcare-100 flex items-center justify-center flex-shrink-0">
                    <MailIcon className="text-healthcare-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:info@medml.com" className="text-healthcare-600 hover:underline">
                      info@medml.com
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-healthcare-100 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="text-healthcare-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+1-800-123-4567" className="text-healthcare-600 hover:underline">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-healthcare-100 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="text-healthcare-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Office</h4>
                    <address className="text-muted-foreground not-italic">
                      123 Innovation Drive<br />
                      San Francisco, CA 94107<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="flex-grow glass rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6885505912!2d-122.39958832323751!3d37.78127771302517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0xd9796e09fbbb1286!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1667338824761!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office location"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
