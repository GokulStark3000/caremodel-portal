
import React from 'react';
import ModelResultsLayout from '@/components/layout/ModelResultsLayout';
import { Droplet, PieChart, BarChart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DiabetesResults = () => {
  return (
    <ModelResultsLayout
      title="Diabetes"
      icon={<Droplet size={28} />}
      diseaseRoute="/disease/diabetes"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Model Performance</h2>
          <p className="text-muted-foreground mb-6">
            Our Diabetes prediction model has been trained and validated on a comprehensive dataset of 
            over 100,000 patient records. Here's how the model performs across different metrics:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
                <PieChart className="h-4 w-4 text-healthcare-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-healthcare-700">94.3%</div>
                <p className="text-xs text-muted-foreground">Overall model accuracy</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sensitivity</CardTitle>
                <BarChart className="h-4 w-4 text-healthcare-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-healthcare-700">92.1%</div>
                <p className="text-xs text-muted-foreground">True positive rate</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Specificity</CardTitle>
                <TrendingUp className="h-4 w-4 text-healthcare-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-healthcare-700">95.8%</div>
                <p className="text-xs text-muted-foreground">True negative rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Feature Importance</h2>
          <p className="text-muted-foreground mb-6">
            The following factors have the greatest influence on diabetes risk prediction in our model:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Blood Glucose Level</span>
                <span className="text-healthcare-700">32%</span>
              </div>
              <div className="w-full bg-healthcare-100 rounded-full h-2">
                <div className="bg-healthcare-600 h-2 rounded-full" style={{ width: '32%' }}></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between mb-1">
                <span className="font-medium">BMI</span>
                <span className="text-healthcare-700">24%</span>
              </div>
              <div className="w-full bg-healthcare-100 rounded-full h-2">
                <div className="bg-healthcare-600 h-2 rounded-full" style={{ width: '24%' }}></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Age</span>
                <span className="text-healthcare-700">18%</span>
              </div>
              <div className="w-full bg-healthcare-100 rounded-full h-2">
                <div className="bg-healthcare-600 h-2 rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Family History</span>
                <span className="text-healthcare-700">15%</span>
              </div>
              <div className="w-full bg-healthcare-100 rounded-full h-2">
                <div className="bg-healthcare-600 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Physical Activity</span>
                <span className="text-healthcare-700">11%</span>
              </div>
              <div className="w-full bg-healthcare-100 rounded-full h-2">
                <div className="bg-healthcare-600 h-2 rounded-full" style={{ width: '11%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModelResultsLayout>
  );
};

export default DiabetesResults;
