import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, BarChart3, Coffee } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Crop Prediction using Machine Learning",
      description: "Intelligent web application that recommends optimal crops based on soil conditions and weather data using Support Vector Machine (SVM) algorithm with 90% accuracy.",
      features: [
        "Machine Learning Integration",
        "Real-time Prediction",
        "User-friendly Farmer Interface",
        "Weather Data Analysis"
      ],
      technologies: ["Python", "Flask", "React", "JavaScript", "SVM"],
      icon: <Brain className="h-8 w-8" />,
      gradient: "bg-gradient-primary",
      category: "Machine Learning"
    },
    {
      title: "Dashboard of Box Cricket",
      description: "Comprehensive sports management dashboard built with modern full-stack technologies, featuring real-time statistics, player management, and match analytics.",
      features: [
        "Real-time Statistics",
        "Player Management",
        "Match Analytics",
        "Responsive Design"
      ],
      technologies: ["React.js", "Tailwind CSS", "PostgreSQL", "Node.js"],
      icon: <BarChart3 className="h-8 w-8" />,
      gradient: "bg-gradient-accent",
      category: "Full Stack"
    },
    {
      title: "Caffeinehub Website",
      description: "Modern full-stack coffee shop website with complete e-commerce functionality, real-time order processing, secure user authentication, and containerized deployment.",
      features: [
        "E-commerce Functionality",
        "Real-time Order System",
        "User Authentication",
        "Product Management"
      ],
      technologies: ["React.js", "MySQL", "REST APIs", "Docker", "Git"],
      icon: <Coffee className="h-8 w-8" />,
      gradient: "bg-primary",
      category: "E-commerce"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Modern grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full w-full p-8">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-white/20 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Showcasing my passion for creating innovative solutions with modern technologies
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-glow hover:shadow-accent/20 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Project Info */}
                    <div className="lg:col-span-2 p-8 text-white">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl text-white ${project.gradient}`}>
                          {project.icon}
                        </div>
                        <div>
                          <Badge className="mb-2 bg-white/20 text-white border-white/30">
                            {project.category}
                          </Badge>
                          <h3 className="text-2xl font-bold text-white">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-white/80 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span className="text-white/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button 
                          variant="hero"
                          className="group"
                          onClick={() => project.title.includes('Caffeinehub') 
                            ? window.open('https://github.com/Rajesh-151103/Mini-project', '_blank')
                            : undefined
                          }
                        >
                          <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          View Code
                        </Button>
                        <Button 
                          variant="outline" 
                          className="text-white border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary transition-all duration-300 group"
                        >
                          <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          Live Demo
                        </Button>
                      </div>
                    </div>

                    {/* Project Visual */}
                    <div className={`${project.gradient} flex items-center justify-center p-8 lg:p-12`}>
                      <div className="text-white text-center">
                        <div className="mb-4 text-white/80 transform scale-150">
                          {project.icon}
                        </div>
                        <div className="text-6xl font-bold mb-2 text-white/90">
                          {index + 1}
                        </div>
                        <div className="text-white/80 font-medium">
                          {project.category} Project
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="bg-gradient-accent text-white border-0 shadow-glow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Want to see more?</h3>
                    <p className="text-white/90">Check out my GitHub for additional projects and contributions.</p>
                  </div>
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://github.com/Rajesh-151103', '_blank')}
                    className="text-white border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    GitHub Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;