
import React from 'react';
import DiseaseLayout from '@/components/layout/DiseaseLayout';
import { Brain } from 'lucide-react';

const Stroke = () => {
  return (
    <DiseaseLayout
      title="Stroke"
      icon={<Brain size={28} />}
      description={
        <div>
          <p className="mb-4">
            A stroke occurs when blood flow to part of the brain is interrupted or reduced, preventing brain tissue 
            from getting oxygen and nutrients. Brain cells begin to die within minutes, making stroke a medical emergency.
          </p>
          <p className="mb-4">
            Risk factors include high blood pressure, smoking, diabetes, high cholesterol, obesity, family history, 
            age, and previous stroke or transient ischemic attack.
          </p>
          <p>
            Early recognition of stroke symptoms and immediate medical attention can minimize brain damage 
            and potential complications. Common symptoms include sudden numbness, confusion, trouble seeing or walking, 
            and severe headache.
          </p>
        </div>
      }
      modelName="StrokePredict Neural Network"
      modelDescription="Our stroke risk prediction model uses a deep neural network trained on extensive clinical data including blood pressure, heart disease history, smoking status, BMI, glucose levels, and demographic factors."
      accuracy="91.8%"
      diseaseRoute="/disease/stroke"
    />
  );
};

export default Stroke;
