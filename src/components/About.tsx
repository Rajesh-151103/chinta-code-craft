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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer crafting innovative solutions with modern technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Passionate and detail-oriented Software Developer with hands-on experience in building 
                  full-stack web applications using React.js, Node.js, and MySQL. Proficient in backend 
                  development with Java, Spring Boot, Servlets, and JDBC.
                </p>
                <p>
                  Adept in integrating RESTful APIs, using Git for version control, and deploying 
                  containerized applications via Docker. Seeking to contribute to innovative and 
                  scalable software solutions at top-tier companies.
                </p>
                <p>
                  I believe in writing clean, efficient code and staying updated with the latest 
                  technologies to deliver exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-primary mt-1">
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-muted-foreground mb-2">
                            {edu.institution}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {edu.year}
                          </div>
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