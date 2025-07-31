import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail, Code, Database, Globe, Star } from "lucide-react";
// Profile image URL
const profileImageUrl = "https://i.postimg.cc/1t6szMrq/photo-2025-07-30-17-40-11.jpg";
const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const techStack = [{
    name: "React.js",
    icon: <Code className="h-4 w-4" />
  }, {
    name: "Spring Boot",
    icon: <Globe className="h-4 w-4" />
  }, {
    name: "PostgreSQL",
    icon: <Database className="h-4 w-4" />
  }, {
    name: "Python",
    icon: <Code className="h-4 w-4" />
  }];
  const achievements = [{
    label: "Projects Completed",
    value: "5+"
  }, {
    label: "Technologies Mastered",
    value: "10+"
  }, {
    label: "Code Quality",
    value: "90%"
  }];
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Modern grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full w-full p-8">
            {Array.from({
            length: 48
          }).map((_, i) => <div key={i} className="border border-white/20 rounded"></div>)}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Enhanced */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                Hello, I'm{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent block">
                  Chinta Rajesh
                </span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl text-white/90 font-semibold">
                  Full Stack Developer
                </h2>
                <p className="text-xl text-white/80 leading-relaxed max-w-lg">Passionate Full Stack Developer skilled in React.js, Node.js, MySQL, and Java (Spring Boot, Servlets, JDBC). Experienced in RESTful APIs, Git, and Docker, aiming to build scalable and innovative software solutions.</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" onClick={() => scrollToSection('#projects')} className="group relative overflow-hidden">
                <span className="relative z-10">View My Work</span>
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform relative z-10" />
              </Button>
              <Button variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {techStack.map((tech, index) => <Badge key={index} className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 px-4 py-2">
                  {tech.icon}
                  <span className="ml-2">{tech.name}</span>
                </Badge>)}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {achievements.map((achievement, index) => <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-white/70 text-sm">
                    {achievement.label}
                  </div>
                </div>)}
            </div>
          </div>

          {/* Right Content - Enhanced Profile Section */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative">
              {/* Main Profile Card */}
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-glow overflow-hidden">
                <CardContent className="p-8">
                  <div className="relative">
                    {/* Profile Image */}
                    <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden mb-6">
                      <img src={profileImageUrl} alt="Chinta Rajesh - Full Stack Developer" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                    
                    {/* Profile Info */}
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">Chinta Rajesh</h3>
                      <p className="text-white/80 mb-4">Fresh Graduate • Full Stack Developer</p>
                      
                      {/* Quick Contact */}
                      <div className="flex justify-center gap-3">
                        <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10 transition-all duration-300" onClick={() => scrollToSection('#contact')}>
                          <Mail className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Tech Badges */}
              <div className="absolute -top-6 -right-6 bg-gradient-accent text-white px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse flex items-center gap-2">
                <Star className="h-4 w-4" />
                React.js
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-primary text-white px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse flex items-center gap-2" style={{
              animationDelay: '1s'
            }}>
                <Database className="h-4 w-4" />
                Spring Boot
              </div>
              <div className="absolute top-1/2 -left-8 bg-white/20 backdrop-blur-md text-white px-3 py-2 rounded-full font-medium shadow-lg animate-pulse flex items-center gap-2" style={{
              animationDelay: '1.5s'
            }}>
                <Globe className="h-4 w-4" />
                Fresh Graduate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;