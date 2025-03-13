
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { BrainCircuitIcon, ActivityIcon, ArrowRightIcon } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const ModelDemo = () => {
  const [age, setAge] = useState<number>(45);
  const [bloodPressure, setBloodPressure] = useState<number>(120);
  const [cholesterol, setCholesterol] = useState<number>(200);
  const [processing, setProcessing] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setResult(null);
    
    // Simulate ML model processing
    setTimeout(() => {
      setProcessing(false);
      setResult({
        riskScore: Math.round((age / 100 + bloodPressure / 200 + cholesterol / 300) * 100) / 100,
        recommendations: [
          "Consider lifestyle modifications to improve cardiovascular health",
          "Schedule follow-up tests in 6 months",
          "Monitor blood pressure weekly"
        ],
        accuracy: 94.3
      });
    }, 2000);
  };

  return (
    <section id="demo" className="py-24 px-6 md:px-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-healthcare-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full bg-healthcare-100 text-healthcare-700 font-medium text-sm mb-6">
              Interactive Demo
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Our ML Model in Action
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Try our cardiovascular risk assessment model by entering sample patient data and see the results instantly.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={300}>
            <Card className="p-6 shadow-subtle border-healthcare-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="age">Patient Age: {age}</Label>
                    <Slider 
                      id="age"
                      min={18} 
                      max={90} 
                      step={1}
                      value={[age]}
                      onValueChange={(value) => setAge(value[0])}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="bloodPressure">Systolic Blood Pressure: {bloodPressure} mmHg</Label>
                    <Slider 
                      id="bloodPressure"
                      min={80} 
                      max={200} 
                      step={1}
                      value={[bloodPressure]}
                      onValueChange={(value) => setBloodPressure(value[0])}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cholesterol">Total Cholesterol: {cholesterol} mg/dL</Label>
                    <Slider 
                      id="cholesterol"
                      min={100} 
                      max={300} 
                      step={1}
                      value={[cholesterol]}
                      onValueChange={(value) => setCholesterol(value[0])}
                      className="mt-2"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Input
                      id="additionalNotes"
                      placeholder="Any additional patient information..."
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-healthcare-600 hover:bg-healthcare-700 text-white"
                  disabled={processing}
                >
                  {processing ? (
                    <span className="flex items-center gap-2">
                      <BrainCircuitIcon className="animate-pulse" size={18} />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Analyze Patient Data
                      <ArrowRightIcon size={18} />
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </FadeIn>
          
          <FadeIn delay={400} direction="left">
            <Card className={`p-6 h-full min-h-[360px] flex flex-col shadow-subtle border-healthcare-100 transition-opacity duration-300 ${processing ? 'opacity-50' : 'opacity-100'}`}>
              {processing ? (
                <div className="flex flex-col items-center justify-center flex-grow">
                  <ActivityIcon size={48} className="text-healthcare-500 animate-pulse mb-4" />
                  <h3 className="text-xl font-semibold mb-6">Analyzing Patient Data</h3>
                  <Progress value={35} className="w-full max-w-md h-2" />
                  <p className="text-sm text-muted-foreground mt-4">Our ML model is processing the input data...</p>
                </div>
              ) : result ? (
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Analysis Results</h3>
                    <p className="text-sm text-muted-foreground">Processed with {result.accuracy}% confidence</p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Cardiovascular Risk Score</span>
                      <span className="text-sm font-bold">{result.riskScore.toFixed(2)}/3.00</span>
                    </div>
                    
                    <div className="w-full bg-healthcare-100 rounded-full h-3">
                      <div 
                        className="h-3 rounded-full bg-gradient-to-r from-teal-500 to-healthcare-500" 
                        style={{ width: `${(result.riskScore / 3) * 100}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Low Risk</span>
                      <span>Moderate Risk</span>
                      <span>High Risk</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="font-medium mb-3">Recommendations:</h4>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="inline-block w-5 h-5 rounded-full bg-healthcare-100 text-healthcare-700 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                            {index + 1}
                          </span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center flex-grow text-center">
                  <BrainCircuitIcon size={48} className="text-healthcare-200 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Data Analyzed Yet</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Adjust the parameters on the left and click "Analyze Patient Data" to see the ML model results here.
                  </p>
                </div>
              )}
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ModelDemo;
