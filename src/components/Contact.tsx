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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                    className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0"
                  >
                    <CardContent className="p-6">
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 group"
                      >
                        <div className={`p-3 rounded-xl text-white ${info.gradient} group-hover:scale-110 transition-transform`}>
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {info.label}
                          </h4>
                          <p className="text-muted-foreground">
                            {info.value}
                          </p>
                        </div>
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