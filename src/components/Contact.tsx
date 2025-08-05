import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "chintarajesh18@gmail.com",
      href: "mailto:chintarajesh18@gmail.com",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9542465286",
      href: "tel:+919542465286",
      gradient: "bg-gradient-accent"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "chintarajesh123",
      href: "https://linkedin.com/in/chintarajesh123",
      gradient: "bg-primary"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "Rajesh-151103",
      href: "https://github.com/Rajesh-151103",
      gradient: "bg-gradient-primary"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]"></div>
        
        {/* Moving constellation effect */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-[twinkle_2s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6 animate-[glow_2s_ease-in-out_infinite_alternate]">
              <span className="text-primary font-semibold">Contact Me</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-[slideUp_0.8s_ease-out]">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
              Let's discuss your next project and bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question about my work, want to collaborate, or 
                  just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                <Card 
                    key={index}
                    className="group shadow-card hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border-0 bg-card/50 backdrop-blur-sm animate-[slideIn_0.6s_ease-out]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 relative overflow-hidden">
                      {/* Animated background effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 group relative z-10"
                      >
                        <div className={`p-3 rounded-xl text-white ${info.gradient} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {info.label}
                          </h4>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                        
                        {/* Floating indicator */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card className="shadow-glow border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground font-medium">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-foreground font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or question..."
                        required
                        className="mt-2 min-h-32"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full group hover:shadow-lg transition-all duration-300"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Location CTA */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="bg-gradient-background text-white border-0 shadow-glow">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <MapPin className="h-6 w-6" />
                  <h3 className="text-2xl font-bold">Ready to Start Your Project?</h3>
                </div>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  I'm currently available for freelance work and full-time opportunities. 
                  Let's create something amazing together!
                </p>
                <Button 
                  variant="accent" 
                  size="lg"
                  onClick={() => window.open('mailto:chintarajesh18@gmail.com', '_blank')}
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  Start a Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;