
import React from 'react';
import DiseaseLayout from '@/components/layout/DiseaseLayout';
import { HeartPulse } from 'lucide-react';

const Hypertension = () => {
  return (
    <DiseaseLayout
      title="Hypertension"
      icon={<HeartPulse size={28} />}
      description={
        <div>
          <p className="mb-4">
            Hypertension, or high blood pressure, is a common condition where the force of blood against 
            the artery walls is consistently too high. It can lead to severe health complications if left untreated.
          </p>
          <p className="mb-4">
            Risk factors include age, family history, obesity, lack of physical activity, high sodium diet, 
            excessive alcohol consumption, and stress.
          </p>
          <p>
            Early detection and management are crucial as hypertension often has no symptoms until it causes 
            serious health problems like heart attack, stroke, or kidney damage.
          </p>
        </div>
      }
      modelName="HyperTensionGuard ML Model"
      modelDescription="Our hypertension risk assessment model uses a Gradient Boosting algorithm trained on data including blood pressure readings, heart rate, age, BMI, cholesterol levels, and lifestyle factors."
      accuracy="92.7%"
      diseaseRoute="/disease/hypertension"
    />
  );
};

export default Hypertension;
