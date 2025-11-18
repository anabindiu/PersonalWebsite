// src/pages/Development.tsx
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, ArrowLeft, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Wanderquest - Travel Challenge App",
        role: "Front-end & product design - React",
        description:
            "Concept app that turns exploring cities into interactive challenges : combining maps, prompts, and rewards with a playful visual style.",
        tags: ["React", "TypeScript", "UI/UX", "Side project"],
    },
    {
        title: "Personal Portfolio - This website",
        role: "Design & development - Vite - React",
        description:
            "A home for my development, painting, and photography work : crafted with a soft aesthetic, reusable components, and a focus on clear storytelling.",
        tags: ["React", "Vite", "Design systems"],
    }
];

const Development = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Page nav */}
            <nav className="border-b border-border bg-background/90 backdrop-blur">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>
                    <span className="text-sm font-medium text-muted-foreground">
                        Ana Bindiu's Software Development Projects
                    </span>
                </div>
            </nav>

            <main className="section-padding max-w-6xl mx-auto space-y-10">
                {/* Intro */}
                <div className="space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary">
                        <Code2 className="h-4 w-4" />
                        <span>Development projects</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-primary">
                        Turning ideas into thoughtful, maintainable products.
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground">
                        I enjoy building interfaces that feel calm and intuitive, while keeping
                        the codebase clean and collaborative. Here are a few projects that
                        reflect how I think about structure, UX, and reliability.
                    </p>
                </div>

                {/* Project list */}
                <section className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        {projects.map((project) => (
                            <Card
                                key={project.title}
                                className="p-6 md:p-7 hover-lift bg-white/80 border-border/80 flex flex-col justify-between"
                            >
                                <div className="space-y-3">
                                    <h2 className="text-lg md:text-xl font-semibold">
                                        {project.title}
                                    </h2>
                                    <p className="text-xs md:text-sm uppercase tracking-wide text-muted-foreground">
                                        {project.role}
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs bg-primary/5 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* optional: placeholder for future case studies / links */}
                    <div className="flex justify-end">
                        <Button
                            variant="outline"
                            className="border-border/80 text-muted-foreground hover:bg-muted/60 text-xs md:text-sm"
                        >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Detailed case studies coming soon
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Development;
