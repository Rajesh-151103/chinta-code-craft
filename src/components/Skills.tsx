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
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/50 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6 animate-[glow_2s_ease-in-out_infinite_alternate]">
              <span className="text-primary font-semibold">Technical Skills</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-[slideUp_0.8s_ease-out]">
              My <span className="bg-gradient-primary bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group shadow-card hover:shadow-glow transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 animate-scale-in border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className={`p-3 rounded-xl text-white ${category.color} group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default transform hover:scale-105 animate-[slideIn_0.5s_ease-out]"
                        style={{ animationDelay: `${skillIndex * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-accent/30 rounded-full animate-ping group-hover:animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
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
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;