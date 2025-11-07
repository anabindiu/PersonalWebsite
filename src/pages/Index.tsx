import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import photo1 from "@/assets/photo-1.png";
import photo2 from "@/assets/photo-2.png";
import photo3 from "@/assets/photo-3.png";
import photo4 from "@/assets/photo-4.png";
import photo5 from "@/assets/photo-5.png";
import photo6 from "@/assets/photo-6.png";
import photo7 from "@/assets/photo-7.png";
import photo8 from "@/assets/photo-8.png";
import photo9 from "@/assets/photo-9.png";
import photo10 from "@/assets/photo-10.png";
import { Github, Linkedin, Mail, Camera, Code2 } from "lucide-react";

const Index = () => {
  const photos = [
    photo1, photo2, photo3, photo4, photo5,
    photo6, photo7, photo8, photo9, photo10
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ana Bindiu</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#dev" className="text-sm hover:text-primary transition-colors">Development</a>
            <a href="#photography" className="text-sm hover:text-primary transition-colors">Photography</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Ana Bindiu
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Developer & Photography Enthusiast
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Crafting elegant code by day, capturing moments through the lens by night.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#dev">
                <Code2 className="mr-2 h-5 w-5" />
                View My Work
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#photography">
                <Camera className="mr-2 h-5 w-5" />
                Photography
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <Code2 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Software Developer</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate software developer who loves building elegant solutions to complex problems. 
                With expertise in modern web technologies, I create applications that are both functional and beautiful.
              </p>
            </Card>
            <Card className="p-8">
              <Camera className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Photographer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Photography is my creative outlet. I love capturing the beauty in everyday moments, 
                telling stories through images, and exploring the world from different perspectives.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section id="dev" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Software Development</h2>
          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git', 'UI/UX Design', 'Web Development'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-muted rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Photography Portfolio */}
      <section id="photography" className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Photography Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={photo}
                  alt={`Photography work ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Interested in working together or just want to say hello?
          </p>
          <div className="flex gap-6 justify-center">
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:ana@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-6 text-center text-muted-foreground">
        <p>© 2025 Ana Bindiu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
