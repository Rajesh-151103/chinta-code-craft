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
      title: "Admin Dashboard",
      description: "Modern administrative dashboard with comprehensive data visualization, user management, and analytics. Built with React.js and featuring interactive charts and real-time updates.",
      features: [
        "Data Visualization",
        "User Management System",
        "Interactive Charts",
        "Real-time Updates"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Chart.js", "Express"],
      icon: <BarChart3 className="h-8 w-8" />,
      gradient: "bg-primary",
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
      gradient: "bg-gradient-primary",
      category: "E-commerce"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my passion for creating innovative solutions with modern technologies
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 animate-fade-in border-0 overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Project Info */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl text-white ${project.gradient}`}>
                          {project.icon}
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {project.category}
                          </Badge>
                          <h3 className="text-2xl font-bold text-foreground">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button className="group">
                          <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          View Code
                        </Button>
                        <Button variant="outline" className="group">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          Live Demo
                        </Button>
                      </div>
                    </div>

                    {/* Project Visual */}
                    <div className={`${project.gradient} flex items-center justify-center p-8 lg:p-12`}>
                      <div className="text-white text-center">
                        <div className="mb-4 text-white/80">
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
            <div className="inline-flex items-center gap-4 bg-card p-6 rounded-2xl shadow-card">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Want to see more?</h3>
                <p className="text-muted-foreground">Check out my GitHub for additional projects and contributions.</p>
              </div>
              <Button className="group">
                <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                GitHub Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;