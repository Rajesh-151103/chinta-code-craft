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
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 animate-scale-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl text-white ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
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
              { number: "3+", label: "Years Learning" },
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