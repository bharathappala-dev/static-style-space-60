import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-slide-up">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{' '}
          <span className="gradient-hero bg-clip-text text-transparent animate-glow">
            Appala Bharath
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          AI & ML Engineer passionate about developing innovative solutions and 
          contributing to technological advancement in collaborative environments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="gradient-hero border-0 text-primary-foreground shadow-glow transition-bounce hover:scale-105"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:bg-primary/10"
            onClick={() => scrollToSection('contact')}
          >
            Let's Connect
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;