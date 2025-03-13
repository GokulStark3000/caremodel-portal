
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Disease pages
import Diabetes from "./pages/diseases/Diabetes";
import Hypertension from "./pages/diseases/Hypertension";
import Stroke from "./pages/diseases/Stroke";
import Obesity from "./pages/diseases/Obesity";

// Results & prediction pages
import DiabetesResults from "./pages/diseases/DiabetesResults";
import DiabetesPredict from "./pages/diseases/DiabetesPredict";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Disease pages */}
          <Route path="/disease/diabetes" element={<Diabetes />} />
          <Route path="/disease/hypertension" element={<Hypertension />} />
          <Route path="/disease/stroke" element={<Stroke />} />
          <Route path="/disease/obesity" element={<Obesity />} />
          
          {/* Results pages */}
          <Route path="/disease/diabetes/results" element={<DiabetesResults />} />
          
          {/* Prediction pages */}
          <Route path="/disease/diabetes/predict" element={<DiabetesPredict />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
