import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-hero bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated full-stack developer with over 5 years of experience crafting 
              digital experiences that seamlessly blend functionality with aesthetics. My journey 
              began with a curiosity for how things work behind the screen, and it has evolved 
              into a passion for creating solutions that matter.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying at the forefront of web development trends.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="gradient-card border border-border/50 p-4 text-center shadow-card transition-bounce hover:shadow-hover">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground text-sm">Projects Completed</div>
              </Card>
              <Card className="gradient-card border border-border/50 p-4 text-center shadow-card transition-bounce hover:shadow-hover">
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 gradient-hero rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-4 bg-muted rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;