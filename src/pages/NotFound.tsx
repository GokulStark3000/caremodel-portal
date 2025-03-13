
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MicroscopeIcon, HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-healthcare-50 px-6">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full bg-healthcare-100 flex items-center justify-center mx-auto">
            <MicroscopeIcon className="h-10 w-10 text-healthcare-600" />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 text-healthcare-800">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Button asChild className="bg-healthcare-600 hover:bg-healthcare-700">
          <a href="/" className="inline-flex items-center gap-2">
            <HomeIcon size={18} />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
