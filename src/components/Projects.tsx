import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Sudoku Game Solver",
      description: "Interactive Sudoku puzzle solver built with Python Tkinter. Takes dynamic input from users and solves Sudoku puzzles using advanced algorithms.",
      longDescription: "An intelligent Sudoku puzzle solver that combines user-friendly GUI design with powerful solving algorithms. Built using Python Tkinter, the application accepts dynamic input from users and efficiently solves Sudoku puzzles of varying difficulty levels. Features include real-time solving visualization, input validation, and an intuitive interface for both beginners and advanced users.",
      technologies: ["Python", "Tkinter", "Algorithms", "GUI Development"],
      image: "🧩",
      color: "from-blue-500 to-purple-600",
      status: "Completed",
      demoUrl: "https://github.com/bharathappala-dev",
      sourceUrl: "https://github.com/bharathappala-dev"
    },
    {
      title: "Efficient Route Planning System",
      description: "Strategic route optimization system that accepts dynamic input for cities and travel costs. Features Python backend with HTML, CSS, and JavaScript frontend.",
      longDescription: "A comprehensive route planning solution designed to optimize travel efficiency and costs. The system accepts dynamic input including number of cities and associated travel costs, then calculates the most efficient routes using advanced pathfinding algorithms. Built with a Python backend for computational processing and a modern web frontend using HTML, CSS, and JavaScript for an intuitive user experience.",
      technologies: ["Python", "HTML", "CSS", "JavaScript", "Algorithms"],
      image: "🗺️",
      color: "from-green-500 to-teal-600",
      status: "Completed",
      demoUrl: "https://github.com/bharathappala-dev",
      sourceUrl: "https://github.com/bharathappala-dev"
    },
    {
      title: "Smart India Hackathon Project",
      description: "Water Footprint Analysis System - A digital solution for monitoring and optimizing water consumption patterns in agriculture sectors.",
      longDescription: "Developed as part of Smart India Hackathon, this innovative project focuses on analyzing and minimizing water usage in agriculture through advanced digital monitoring. The solution tracks direct and indirect water usage (blue, green, and grey water footprints), provides real-time insights, and suggests conservation strategies. Enhanced problem-solving, teamwork, and sustainability concepts while applying technology for environmental impact.",
      technologies: ["Python", "Data Analytics", "Environmental Tech", "Sustainability"],
      image: "💧",
      color: "from-blue-400 to-cyan-600",
      status: "Completed",
      demoUrl: "https://github.com/bharathappala-dev",
      sourceUrl: "https://github.com/bharathappala-dev"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-hero bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="gradient-card border border-border/50 overflow-hidden shadow-card transition-bounce hover:shadow-hover group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-4xl mb-4 p-3 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-20`}>
                    {project.image}
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 border-primary/20 hover:bg-primary/10"
                        onClick={() => setSelectedProject(project)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3">
                          <span className="text-2xl">{project.image}</span>
                          {project.title}
                          <Badge variant={project.status === 'Live' ? 'default' : 'secondary'}>
                            {project.status}
                          </Badge>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-3 pt-4">
                          <Button asChild className="flex-1">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button asChild variant="outline" className="flex-1">
                            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-muted-foreground/20 hover:bg-muted/20"
                  >
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-primary/20 hover:bg-primary/10"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;