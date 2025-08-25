import { Button } from "@/components/ui/button";
import { BookOpen, Rocket } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-slide-up">
            <span className="block bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent pulse-glow">
              AI Labs
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Unlock the power of Artificial Intelligence with our cutting-edge courses
            <br />
            <span className="text-primary-glow">Shape the future. Master AI today.</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="glow-button px-8 py-4 text-lg"
              onClick={() => scrollToSection('courses')}
            >
              <BookOpen className="mr-2" size={20} />
              View All Courses
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg bg-white/5 border-white/20 hover:bg-white/10 backdrop-blur-sm"
              onClick={() => scrollToSection('register')}
            >
              <Rocket className="mr-2" size={20} />
              Let's Get Started
            </Button>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary-glow rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;