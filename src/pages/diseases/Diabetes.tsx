
import React from 'react';
import DiseaseLayout from '@/components/layout/DiseaseLayout';
import { Droplet } from 'lucide-react';

const Diabetes = () => {
  return (
    <DiseaseLayout
      title="Diabetes"
      icon={<Droplet size={28} />}
      description={
        <div>
          <p className="mb-4">
            Diabetes is a chronic health condition characterized by elevated blood sugar levels. 
            It occurs when the body cannot produce enough insulin or cannot effectively use the insulin it produces.
          </p>
          <p className="mb-4">
            There are several types of diabetes, with Type 2 being the most common. Risk factors include family history, 
            age, weight, physical inactivity, and certain health conditions.
          </p>
          <p>
            Early detection and management of diabetes can significantly reduce the risk of complications 
            such as heart disease, stroke, kidney disease, and nerve damage.
          </p>
        </div>
      }
      modelName="DiabetesPredict ML Model"
      modelDescription="Our diabetes prediction model uses a Random Forest algorithm trained on a comprehensive dataset including age, BMI, blood glucose levels, family history, and lifestyle factors."
      accuracy="94.3%"
      diseaseRoute="/disease/diabetes"
    />
  );
};

export default Diabetes;
