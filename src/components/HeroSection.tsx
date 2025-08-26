import { Button } from "@/components/ui/button";
import { BookOpen, Rocket } from "lucide-react";
import { useState } from "react";
import AuthModal from "./AuthModal";

const HeroSection = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 3D Grid Background */}
        <div className="absolute inset-0 bg-grid-3d opacity-30"></div>
        
        {/* Floating 3D Geometric Shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/20 rounded-lg blur-sm animate-float-3d transform-gpu perspective-1000 rotate-x-45 rotate-y-45"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-primary-glow/15 rounded-full blur-md animate-pulse-3d transform-gpu perspective-1000 rotate-x-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-accent/25 rounded-xl blur-sm animate-spin-3d transform-gpu perspective-1000"></div>
        
        {/* Layered 3D Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float-3d-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-orbit" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl animate-breathe"></div>
        
        {/* Particle Effect Simulation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-primary rounded-full animate-particle-1"></div>
          <div className="absolute top-2/6 right-1/6 w-1.5 h-1.5 bg-primary-glow rounded-full animate-particle-2"></div>
          <div className="absolute bottom-1/6 left-2/6 w-2.5 h-2.5 bg-accent rounded-full animate-particle-3"></div>
          <div className="absolute top-3/6 left-3/6 w-1 h-1 bg-primary rounded-full animate-particle-4"></div>
          <div className="absolute bottom-2/6 right-2/6 w-1.5 h-1.5 bg-primary-glow rounded-full animate-particle-5"></div>
        </div>
        
        {/* 3D Wireframe Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 border border-primary/30 rounded-lg animate-rotate-3d transform-gpu perspective-1000 rotate-x-45 rotate-y-45"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-accent/20 rounded-full animate-pulse-wireframe"></div>
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
              onClick={() => setIsAuthModalOpen(true)}
            >
              <Rocket className="mr-2" size={20} />
              Let's Get Started
            </Button>
          </div>

          {/* Enhanced 3D Floating elements */}
          <div className="absolute top-20 left-10 w-6 h-6 bg-primary/80 rounded-full animate-float-glow shadow-glow-primary"></div>
          <div className="absolute top-40 right-20 w-8 h-8 bg-purple-500/70 rounded-lg animate-spin-slow transform-gpu perspective-1000 rotate-x-45"></div>
          <div className="absolute bottom-20 left-20 w-4 h-4 bg-primary-glow/90 rounded-full animate-pulse-intense shadow-glow-accent"></div>
          <div className="absolute top-60 right-40 w-5 h-5 bg-accent/60 rounded-xl animate-bounce-3d"></div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;