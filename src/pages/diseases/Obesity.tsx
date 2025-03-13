
import React from 'react';
import DiseaseLayout from '@/components/layout/DiseaseLayout';
import { Weight } from 'lucide-react';

const Obesity = () => {
  return (
    <DiseaseLayout
      title="Obesity"
      icon={<Weight size={28} />}
      description={
        <div>
          <p className="mb-4">
            Obesity is a complex disease involving an excessive amount of body fat. It increases the risk of 
            various other diseases and health problems, including heart disease, diabetes, and certain cancers.
          </p>
          <p className="mb-4">
            Factors that contribute to obesity include genetics, lifestyle choices, certain medications, 
            and underlying health conditions. Diet, physical activity, and sleep patterns all play significant roles.
          </p>
          <p>
            Body Mass Index (BMI) is commonly used to classify obesity, though it has limitations as it doesn't 
            directly measure body fat. A BMI of 30 or higher is generally considered obese.
          </p>
        </div>
      }
      modelName="ObesityAnalytics ML Model"
      modelDescription="Our obesity risk assessment model uses a Support Vector Machine algorithm trained on data including age, gender, diet patterns, physical activity levels, family history, and medical conditions."
      accuracy="89.5%"
      diseaseRoute="/disease/obesity"
    />
  );
};

export default Obesity;
