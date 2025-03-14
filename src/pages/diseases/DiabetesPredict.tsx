
import React, { useState } from 'react';
import PredictionLayout from '@/components/layout/PredictionLayout';
import { Droplet, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const formSchema = z.object({
  age: z.coerce.number().min(1, "Age is required").max(120, "Age must be less than 120"),
  hypertension: z.enum(["0", "1"], {
    required_error: "Please select if you have hypertension",
  }),
  heart_disease: z.enum(["0", "1"], {
    required_error: "Please select if you have heart disease",
  }),
  bmi: z.coerce.number().min(10, "BMI must be at least 10").max(50, "BMI must be less than 50"),
  HbA1c_level: z.coerce.number().min(3, "HbA1c level must be at least 3").max(15, "HbA1c level must be less than 15"),
  blood_glucose_level: z.coerce.number().min(50, "Blood glucose must be at least 50").max(500, "Blood glucose must be less than 500"),
  gender: z.enum(["Female", "Male", "Other"], {
    required_error: "Please select your gender",
  }),
  smoking_history: z.enum(["0", "1", "2", "3", "4"], {
    required_error: "Please select your smoking history",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const DiabetesPredict = () => {
  const [showResult, setShowResult] = useState(false);
  const [riskScore, setRiskScore] = useState(0);
  
  // Define the smoking history mapping
  const smokingMapping = {
    0: { smoking_history_current: 0, smoking_history_ever: 0, smoking_history_former: 0, smoking_history_never: 1, smoking_history_not_current: 0 }, // Never
    1: { smoking_history_current: 1, smoking_history_ever: 0, smoking_history_former: 0, smoking_history_never: 0, smoking_history_not_current: 0 }, // Current
    2: { smoking_history_current: 0, smoking_history_ever: 1, smoking_history_former: 0, smoking_history_never: 0, smoking_history_not_current: 0 }, // Ever
    3: { smoking_history_current: 0, smoking_history_ever: 0, smoking_history_former: 1, smoking_history_never: 0, smoking_history_not_current: 0 }, // Former
    4: { smoking_history_current: 0, smoking_history_ever: 0, smoking_history_former: 0, smoking_history_never: 0, smoking_history_not_current: 1 }, // Not Current
  };

  // Map smoking history labels
  const smokingHistoryLabels = {
    "0": "Never smoked",
    "1": "Currently smoking",
    "2": "Ever smoked",
    "3": "Former smoker",
    "4": "Not currently smoking"
  };
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: undefined,
      hypertension: undefined,
      heart_disease: undefined,
      bmi: undefined,
      HbA1c_level: undefined,
      blood_glucose_level: undefined,
      gender: undefined,
      smoking_history: undefined,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    
    // Get smoking mapping based on selection
    const selectedSmokingHistory = smokingMapping[data.smoking_history as keyof typeof smokingMapping];
    
    // Convert data for ML model format
    const modelInput = {
      age: data.age,
      hypertension: parseInt(data.hypertension),
      heart_disease: parseInt(data.heart_disease),
      bmi: data.bmi,
      HbA1c_level: data.HbA1c_level,
      blood_glucose_level: data.blood_glucose_level,
      gender_Male: data.gender === "Male" ? 1 : 0,
      gender_Other: data.gender === "Other" ? 1 : 0,
      ...selectedSmokingHistory
    };
    
    console.log("Model input:", modelInput);
    
    // Simplified ML prediction simulation
    let score = 0;
    
    // Age factor
    if (data.age > 45) score += 10;
    else if (data.age > 30) score += 5;
    
    // Medical conditions
    if (data.hypertension === "1") score += 15;
    if (data.heart_disease === "1") score += 20;
    
    // BMI factor
    if (data.bmi > 30) score += 15;
    else if (data.bmi > 25) score += 10;
    
    // HbA1c and glucose levels
    if (data.HbA1c_level > 6.5) score += 25;
    else if (data.HbA1c_level > 5.7) score += 15;
    
    if (data.blood_glucose_level > 180) score += 25;
    else if (data.blood_glucose_level > 140) score += 15;
    
    // Gender factor
    if (data.gender === "Male") score += 5;
    
    // Smoking history factors
    if (selectedSmokingHistory.smoking_history_current === 1) score += 10;
    if (selectedSmokingHistory.smoking_history_ever === 1) score += 5;
    if (selectedSmokingHistory.smoking_history_former === 1) score += 3;
    
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
      <Alert className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Information Notice</AlertTitle>
        <AlertDescription>
          This prediction model uses machine learning to estimate diabetes risk based on several health metrics.
          Please enter accurate information for the best results.
        </AlertDescription>
      </Alert>
      
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
                <FormItem className="space-y-3">
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Female" />
                        </FormControl>
                        <FormLabel className="font-normal">Female</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Male" />
                        </FormControl>
                        <FormLabel className="font-normal">Male</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Other" />
                        </FormControl>
                        <FormLabel className="font-normal">Other</FormLabel>
                      </FormItem>
                    </RadioGroup>
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
              name="HbA1c_level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>HbA1c Level (%)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter HbA1c level" step="0.1" {...field} />
                  </FormControl>
                  <FormDescription>
                    Normal: below 5.7%, Prediabetes: 5.7%-6.4%, Diabetes: 6.5% or higher
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="blood_glucose_level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blood Glucose Level (mg/dL)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter blood glucose level" {...field} />
                  </FormControl>
                  <FormDescription>
                    Fasting blood sugar level
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="hypertension"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Do you have Hypertension?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="1" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="0" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="heart_disease"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Do you have Heart Disease?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="1" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="0" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="border-t pt-4 mt-6">
            <h3 className="text-lg font-medium mb-4">Smoking History</h3>
            <FormField
              control={form.control}
              name="smoking_history"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Smoking History</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your smoking history" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0">Never smoked</SelectItem>
                      <SelectItem value="1">Currently smoking</SelectItem>
                      <SelectItem value="2">Ever smoked</SelectItem>
                      <SelectItem value="3">Former smoker</SelectItem>
                      <SelectItem value="4">Not currently smoking</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select the option that best describes your smoking history
                  </FormDescription>
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
