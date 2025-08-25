import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card m-4 rounded-2xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              AI Labs
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-white/10">
              <LogIn size={18} />
              Login
            </Button>
            <Button className="glow-button flex items-center gap-2 px-6 py-2">
              <UserPlus size={18} />
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;