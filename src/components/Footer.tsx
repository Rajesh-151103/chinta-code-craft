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
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Chinta Rajesh</h3>
              <p className="text-primary-foreground/80">
                Full Stack Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-110"
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
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Back to Top ↑
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 my-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
              © {currentYear} Chinta Rajesh. Made with{" "}
              <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />{" "}
              and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;