import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech",
      institution: "Sri Venkateswara College of Engineering and Technology",
      year: "2021–2025",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Intermediate",
      institution: "Sri Basara Junior College",
      year: "2019–2021",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "SSC",
      institution: "Ravindra Bharathi School",
      year: "2018–2019",
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-primary/60 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[sweep_4s_ease-in-out_infinite]"
            style={{ 
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6">
              <span className="text-primary font-semibold">About Me</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Passionate <span className="bg-gradient-primary bg-clip-text text-transparent">Developer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting innovative solutions with modern technologies and creative problem-solving
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">CJ</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
                </div>
                
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p className="relative pl-6">
                    <span className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></span>
                    Passionate and detail-oriented Software Developer with hands-on experience in building 
                    full-stack web applications using React.js, Node.js, and MySQL. Proficient in backend 
                    development with Java, Spring Boot, Servlets, and JDBC.
                  </p>
                  <p className="relative pl-6">
                    <span className="absolute left-0 top-2 w-2 h-2 bg-accent rounded-full"></span>
                    Adept in integrating RESTful APIs, using Git for version control, and deploying 
                    containerized applications via Docker. Seeking to contribute to innovative and 
                    scalable software solutions at top-tier companies.
                  </p>
                  <p className="relative pl-6">
                    <span className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></span>
                    I believe in writing clean, efficient code and staying updated with the latest 
                    technologies to deliver exceptional user experiences.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-border/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4+</div>
                    <div className="text-sm text-muted-foreground">Years Learning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education Journey</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-card/60 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-primary rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h4>
                          <p className="text-muted-foreground mb-3 font-medium">
                            {edu.institution}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-full px-3 py-1 w-fit">
                            <Calendar className="h-4 w-4" />
                            {edu.year}
                          </div>
                        </div>
                        <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;