import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImage from "@/assets/rajesh-profile.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Chinta Rajesh
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-white/90 font-semibold">
              Full Stack Developer
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-lg">
              Building scalable and impactful web solutions with precision and passion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              onClick={() => scrollToSection('#projects')}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-accent hover:bg-white/10"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-30 scale-110"></div>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-glow">
              <img
                src={profileImage}
                alt="Chinta Rajesh - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white text-primary px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse">
              React.js
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-accent text-white px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
              Node.js
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;