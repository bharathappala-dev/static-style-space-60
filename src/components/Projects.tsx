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
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and admin dashboard.",
      longDescription: "This comprehensive e-commerce platform was built from the ground up using modern web technologies. It features a responsive React frontend with a robust Node.js backend, integrated with PostgreSQL for data persistence and Stripe for secure payment processing. The admin dashboard provides comprehensive analytics and inventory management capabilities.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "🛒",
      color: "from-blue-500 to-purple-600",
      status: "Live",
      demoUrl: "https://your-demo-url.com",
      sourceUrl: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features built with React and Socket.io.",
      longDescription: "A powerful project management solution designed for modern teams. Features real-time collaboration through WebSocket connections, intuitive drag-and-drop task organization, team member assignments, and comprehensive project tracking. Built with performance and scalability in mind.",
      technologies: ["React", "Socket.io", "MongoDB", "Express"],
      image: "📋",
      color: "from-green-500 to-teal-600",
      status: "In Development",
      demoUrl: "https://your-demo-url.com",
      sourceUrl: "https://github.com/yourusername/task-management"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation platform using OpenAI's GPT API. Features include blog post generation, social media content, and SEO optimization.",
      longDescription: "Cutting-edge AI content generation platform that leverages OpenAI's latest models to create high-quality content across multiple formats. Features intelligent SEO optimization, multi-language support, content scheduling, and analytics dashboard for tracking performance metrics.",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
      image: "🤖",
      color: "from-purple-500 to-pink-600",
      status: "Live",
      demoUrl: "https://your-demo-url.com",
      sourceUrl: "https://github.com/yourusername/ai-content-generator"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics using modern web technologies.",
      longDescription: "An elegant weather dashboard featuring real-time weather data, interactive maps with radar overlay, detailed forecasts, and historical weather analytics. Built with Vue.js for optimal performance and includes features like location-based alerts and customizable widgets.",
      technologies: ["Vue.js", "Weather API", "Chart.js", "Tailwind"],
      image: "🌤️",
      color: "from-orange-500 to-red-600",
      status: "Live",
      demoUrl: "https://your-demo-url.com",
      sourceUrl: "https://github.com/yourusername/weather-dashboard"
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