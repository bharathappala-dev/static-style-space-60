import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thanks for your message! I\'ll get back to you soon.');
  };

  const contactInfo = [
    { icon: "📧", label: "Email", value: "appalabharath2005@gmail.com", link: "mailto:appalabharath2005@gmail.com" },
    { icon: "📱", label: "Phone", value: "+91-8309828941", link: "tel:+918309828941" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/appala-bharath", link: "https://www.linkedin.com/in/appala-bharath/" },
    { icon: "🔗", label: "GitHub", value: "github.com/bharathappala-dev", link: "https://github.com/bharathappala-dev" }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-hero bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a 
                  key={info.label}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/80 transition-smooth"
                >
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <div className="font-medium">{info.label}</div>
                    <div className="text-muted-foreground text-sm">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Card className="gradient-card border border-border/50 p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-muted/50 border-border/50"
                  required
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-muted/50 border-border/50"
                  required
                />
              </div>
              
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-muted/50 border-border/50"
                required
              />
              
              <Input 
                placeholder="Subject" 
                className="bg-muted/50 border-border/50"
                required
              />
              
              <Textarea 
                placeholder="Your Message"
                rows={5}
                className="bg-muted/50 border-border/50"
                required
              />
              
              <Button 
                type="submit" 
                className="w-full gradient-hero border-0 text-primary-foreground shadow-glow transition-bounce hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;