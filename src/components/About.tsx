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
              I'm currently pursuing a Bachelor of Technology in Artificial Intelligence and Machine Learning 
              from Anurag University with a CGPA of 8.8. Always eager to explore new opportunities and 
              develop skills that make a difference. Ready to contribute, learn, and grow in a collaborative environment.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey includes participating in prestigious hackathons like Smart India Hackathon, 
              where I worked on innovative solutions for environmental sustainability. I'm passionate about 
              leveraging technology to solve real-world problems and create meaningful impact.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="gradient-card border border-border/50 p-4 text-center shadow-card transition-bounce hover:shadow-hover">
                <div className="text-2xl font-bold text-primary">8.8</div>
                <div className="text-muted-foreground text-sm">Current CGPA</div>
              </Card>
              <Card className="gradient-card border border-border/50 p-4 text-center shadow-card transition-bounce hover:shadow-hover">
                <div className="text-2xl font-bold text-secondary">4+</div>
                <div className="text-muted-foreground text-sm">Certifications</div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 gradient-hero rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-4 bg-background border-4 border-border rounded-full overflow-hidden shadow-card">
                <img 
                  src="/src/assets/profile-photo.jpg" 
                  alt="profile-photo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
