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
import { Github, Linkedin, Mail, Camera, Code2, Palette } from "lucide-react";

const Index = () => {
  const photos = [
    photo1, photo2, photo3, photo4, photo5,
    photo6, photo7, photo8, photo9, photo10
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 gradient-creative text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ana Bindiu</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-sm hover:text-white/80 transition-colors font-medium">About</a>
            <a href="#dev" className="text-sm hover:text-white/80 transition-colors font-medium">Development</a>
            <a href="#painting" className="text-sm hover:text-white/80 transition-colors font-medium">Painting</a>
            <a href="#photography" className="text-sm hover:text-white/80 transition-colors font-medium">Photography</a>
            <a href="#contact" className="text-sm hover:text-white/80 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center justify-center gradient-subtle">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Ana Bindiu
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8 font-semibold">
            Software Developer · Painter · Photographer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Creating beautiful digital experiences, vibrant paintings, and capturing life's moments.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="#dev">
                <Code2 className="mr-2 h-5 w-5" />
                Development
              </a>
            </Button>
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90">
              <a href="#painting">
                <Palette className="mr-2 h-5 w-5" />
                Painting
              </a>
            </Button>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <a href="#photography">
                <Camera className="mr-2 h-5 w-5" />
                Photography
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-lift border-2 border-primary/20">
              <Code2 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Software Developer</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate software developer who loves building elegant solutions to complex problems. 
                With expertise in modern web technologies, I create applications that are both functional and beautiful.
              </p>
            </Card>
            <Card className="p-8 hover-lift border-2 border-secondary/20">
              <Palette className="h-12 w-12 mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-4">Painter</h3>
              <p className="text-muted-foreground leading-relaxed">
                Painting allows me to express emotions and ideas through color and form. 
                I explore various techniques and styles, creating vibrant artworks that tell unique stories.
              </p>
            </Card>
            <Card className="p-8 hover-lift border-2 border-accent/20">
              <Camera className="h-12 w-12 mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-4">Photographer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Photography is my way of capturing the beauty in everyday moments, 
                telling stories through images, and exploring the world from different perspectives.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section id="dev" className="section-padding gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
            Software Development
          </h2>
          <div className="space-y-6">
            <Card className="p-8 border-2 border-primary/30 hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-primary">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git', 'UI/UX Design', 'Web Development'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Painting Portfolio */}
      <section id="painting" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-secondary">
            Painting Portfolio
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Exploring color, emotion, and storytelling through vibrant paintings
          </p>
          <div className="bg-secondary/10 border-2 border-secondary/30 rounded-lg p-12 text-center">
            <Palette className="h-20 w-20 mx-auto mb-6 text-secondary" />
            <p className="text-xl text-muted-foreground mb-4">
              Painting gallery coming soon! I'm currently preparing my collection to share with you.
            </p>
            <p className="text-muted-foreground">
              Check back soon to see my latest artworks.
            </p>
          </div>
        </div>
      </section>

      {/* Photography Portfolio */}
      <section id="photography" className="section-padding gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-accent">
            Photography Portfolio
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Capturing moments, emotions, and stories through the lens
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover-lift border-2 border-accent/20"
              >
                <img
                  src={photo}
                  alt={`Photography work ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Interested in working together or just want to say hello?
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button size="lg" variant="outline" asChild className="border-2 border-primary/50 hover:bg-primary hover:text-white">
              <a href="mailto:ana@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-secondary/50 hover:bg-secondary hover:text-white">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-accent/50 hover:bg-accent hover:text-white">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-creative text-white py-8 px-6 text-center">
        <p>© 2025 Ana Bindiu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
