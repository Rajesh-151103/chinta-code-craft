import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Wrench, MessageSquare, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java (Core, OOP)", "Python", "JavaScript"],
      color: "bg-gradient-primary"
    },
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
      color: "bg-gradient-accent"
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js (Express)", "Spring Boot", "Servlets", "JDBC"],
      color: "bg-primary"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
      color: "bg-gradient-primary"
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "GitHub", "Docker", "REST APIs", "Microservices", "JUnit5"],
      color: "bg-gradient-accent"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Problem Solving", "Communication", "Attention to Detail", "Leadership"],
      color: "bg-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-5 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        
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
              Technical <span className="bg-gradient-accent bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-glow hover:shadow-accent/20 transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl text-white ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {[
              { number: "Fresh", label: "Graduate" },
              { number: "10+", label: "Technologies" },
              { number: "5+", label: "Projects" },
              { number: "100%", label: "Dedication" }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-glow hover:shadow-accent/20 transition-all duration-300 transform hover:scale-105 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;