import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Server, Smartphone, Container } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full Stack Web Development",
      description: "Complete web application development using React.js, Node.js, and modern databases. From concept to deployment, I create scalable and user-friendly web solutions.",
      features: ["React.js Frontend", "Node.js Backend", "Database Integration", "Responsive Design"],
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "API Integration & Backend Systems",
      description: "Design and implement robust backend systems with RESTful APIs, microservices architecture, and secure data management using Java Spring Boot and Node.js.",
      features: ["RESTful APIs", "Microservices", "Database Design", "Security Implementation"],
      gradient: "bg-gradient-accent"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Frontend Design",
      description: "Create beautiful, responsive user interfaces that work seamlessly across all devices using React.js, HTML5, CSS3, and Tailwind CSS.",
      features: ["Mobile-First Design", "Modern UI/UX", "Cross-Browser Support", "Performance Optimization"],
      gradient: "bg-primary"
    },
    {
      icon: <Container className="h-8 w-8" />,
      title: "Containerization & Deployment",
      description: "Deploy applications efficiently using Docker containers, ensuring consistent environments from development to production with modern DevOps practices.",
      features: ["Docker Integration", "CI/CD Pipelines", "Cloud Deployment", "Environment Management"],
      gradient: "bg-gradient-primary"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              My <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 animate-scale-in border-0 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Header with gradient */}
                  <div className={`${service.gradient} text-white p-6`}>
                    <div className="flex items-center gap-4 mb-4">
                      {service.icon}
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={scrollToContact}
                      className="w-full group hover:shadow-lg transition-all duration-300"
                    >
                      Get Started
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-primary text-white rounded-2xl p-8 shadow-glow">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help bring your ideas to life with modern web technologies and best practices.
              </p>
              <Button 
                variant="accent" 
                size="lg"
                onClick={scrollToContact}
                className="transform hover:scale-105 transition-all duration-300"
              >
                Contact Me Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;