import { Card } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Python", level: 82, icon: "🐍" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 78, icon: "🍃" }
      ]
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "Git", level: 90, icon: "📦" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "Figma", level: 85, icon: "🎭" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-hero bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <Card key={skillGroup.category} className="gradient-card border border-border/50 p-6 shadow-card transition-bounce hover:shadow-hover">
              <h3 className="text-xl font-semibold mb-6 text-center gradient-hero bg-clip-text text-transparent">
                {skillGroup.category}
              </h3>
              
              <div className="space-y-4">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{tech.icon}</span>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{tech.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full gradient-hero transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${tech.level}%`,
                          animationDelay: `${(groupIndex * 4 + techIndex) * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;