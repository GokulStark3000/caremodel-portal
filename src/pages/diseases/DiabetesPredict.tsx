
import React, { useState } from 'react';
import PredictionLayout from '@/components/layout/PredictionLayout';
import { Droplet, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  age: z.coerce.number().min(1, "Age is required").max(120, "Age must be less than 120"),
  gender: z.string().min(1, "Gender is required"),
  bmi: z.coerce.number().min(10, "BMI must be at least 10").max(50, "BMI must be less than 50"),
  glucose: z.coerce.number().min(50, "Glucose must be at least 50").max(300, "Glucose must be less than 300"),
  bloodPressure: z.coerce.number().min(50, "Blood pressure must be at least 50").max(200, "Blood pressure must be less than 200"),
  insulin: z.coerce.number().min(0, "Insulin must be at least 0"),
  familyHistory: z.string().min(1, "Family history is required"),
  physicalActivity: z.string().min(1, "Physical activity level is required"),
});

type FormValues = z.infer<typeof formSchema>;

const DiabetesPredict = () => {
  const [showResult, setShowResult] = useState(false);
  const [riskScore, setRiskScore] = useState(0);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: undefined,
      gender: "",
      bmi: undefined,
      glucose: undefined,
      bloodPressure: undefined,
      insulin: undefined,
      familyHistory: "",
      physicalActivity: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    
    // Simplified ML prediction simulation
    let score = 0;
    
    // Age factor
    if (data.age > 45) score += 20;
    else if (data.age > 30) score += 10;
    
    // BMI factor
    if (data.bmi > 30) score += 25;
    else if (data.bmi > 25) score += 15;
    
    // Glucose factor
    if (data.glucose > 140) score += 30;
    else if (data.glucose > 100) score += 20;
    
    // Family history
    if (data.familyHistory === "yes") score += 15;
    
    // Physical activity
    if (data.physicalActivity === "low") score += 10;
    
    // Scale to percentage (0-100)
    const finalScore = Math.min(Math.round(score), 100);
    setRiskScore(finalScore);
    setShowResult(true);
  };

  return (
    <PredictionLayout
      title="Diabetes"
      icon={<Droplet size={28} />}
      diseaseRoute="/disease/diabetes"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter your age" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      {...field}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="bmi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Body Mass Index (BMI)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter your BMI" step="0.1" {...field} />
                  </FormControl>
                  <FormDescription>
                    BMI = weight(kg) / height²(m)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="glucose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fasting Blood Glucose (mg/dL)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter blood glucose level" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="bloodPressure"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blood Pressure (mm Hg - systolic)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter blood pressure" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="insulin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Insulin Level (µU/mL)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter insulin level" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="familyHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Family History of Diabetes</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      {...field}
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="physicalActivity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Physical Activity Level</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      {...field}
                    >
                      <option value="">Select activity level</option>
                      <option value="high">High (Regular vigorous exercise)</option>
                      <option value="medium">Medium (Moderate exercise)</option>
                      <option value="low">Low (Little to no exercise)</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <Button type="submit" className="w-full sm:w-auto bg-healthcare-600 hover:bg-healthcare-700">
            Calculate Risk
          </Button>
        </form>
      </Form>
      
      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Diabetes Risk Assessment</DialogTitle>
            <DialogDescription>
              Based on the information provided, here is your risk assessment.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex flex-col items-center text-center">
              <div 
                className={`w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-2xl ${
                  riskScore < 30 ? 'bg-green-500' : 
                  riskScore < 60 ? 'bg-yellow-500' : 
                  'bg-red-500'
                }`}
              >
                {riskScore}%
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                {riskScore < 30 ? 'Low Risk' : 
                 riskScore < 60 ? 'Moderate Risk' : 
                 'High Risk'}
              </h3>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex gap-2 items-start">
                <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Important Note</p>
                  <p className="text-sm text-muted-foreground">
                    This assessment is based on a simplified model and is for educational purposes only.
                    Please consult with a healthcare professional for a proper medical diagnosis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PredictionLayout>
  );
};

export default DiabetesPredict;
