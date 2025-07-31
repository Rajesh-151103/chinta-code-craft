import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:chintarajesh18@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+919542465286",
      label: "Phone"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/chintarajesh123",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Rajesh-151103",
      label: "GitHub"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-primary text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Chinta Rajesh</h3>
                  <p className="text-white/80 text-sm">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-white hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 rounded-xl"
                >
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>

            {/* Back to Top */}
            <div className="text-center md:text-right">
              <Button
                variant="outline"
                onClick={scrollToTop}
                className="text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Back to Top ↑
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block">
              <p className="text-white/90 flex items-center justify-center gap-2 text-sm">
                © {currentYear} Chinta Rajesh. Made with{" "}
                <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />{" "}
                and modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;