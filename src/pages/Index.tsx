import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import photo11 from "@/assets/mepic1.jpg";
import photo14 from "@/assets/mepic4.jpg";
import photo16 from "@/assets/italy2.jpg";
import photo20 from "@/assets/italy6.jpg";
import photo24 from "@/assets/italy8.jpg";
import photo25 from "@/assets/budapest2.jpg";
import { Link } from "react-router-dom";


import { useEffect, useState } from "react";

import {
    Github,
    Linkedin,
    Mail,
    Camera,
    Code2,
    Palette,
    BugPlay,
    Database,
    CloudCog,
    LayoutTemplate,
} from "lucide-react";

const Index = () => {
    const heroImages = [photo16, photo20, photo24, photo25];
    const skills = [
        {
            emoji: "⚛️",
            title: "Front-end Engineering",
            subtitle: "React, TypeScript, Vite, SPA patterns.",
        },
        {
            emoji: "🧩",
            title: "Component Libraries",
            subtitle: "Blazor / MudBlazor, reusable UI systems.",
        },
        {
            emoji: "🧪",
            title: "Testing & QA Automation",
            subtitle: "Selenium, bUnit, xUnit, end-to-end flows.",
        },
        {
            emoji: "🗄️",
            title: "APIs & Data",
            subtitle: "C# / .NET, REST APIs, SQL, EF-style data layers.",
        },
        {
            emoji: "☁️",
            title: "Cloud & Dev Tools",
            subtitle: "Azure, Git, CI/CD, DevOps-friendly workflows.",
        },
    ];


    const [activeHeroIndex, setActiveHeroIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 4500); // change every 4.5s

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Navigation – name on top, tabs under */}
            <nav className="border-b border-border bg-background/90 backdrop-blur">
                <div className="max-w-6xl mx-auto px-6 pt-6 pb-2 flex justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Ana Bindiu
                    </h1>
                </div>

                <div className="max-w-6xl mx-auto px-6 pb-4 flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
                    <a href={`${import.meta.env.BASE_URL}#about`} className="hover:text-[#f1c6d9] transition-colors">
                        About
                    </a>
                    <Link
                        to="/development"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Development
                    </Link>
                    <Link
                        to="/painting"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Painting
                    </Link>
                    <Link
                        to="/photography"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Photography
                    </Link>
                    <Link to="/contact" className="hover:text-primary transition">
                        Contact
                    </Link>
                </div>
            </nav>


            {/* Hero – big full-width slider like Naomi’s */}
            <section className="bg-background">
                <div className="w-full pt-6 md:pt-10 pb-12">
                    <Card className="hero-card relative overflow-hidden border border-border/70 rounded-none  shadow-xl w-full">
                        <div className="relative w-full aspect-[16/9] max-h-[70vh]">
                            {/* slideshow images */}
                            {heroImages.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Ana portfolio slide ${index + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${index === activeHeroIndex ? "opacity-100" : "opacity-0"
                                        }`}
                                />
                            ))}

                            {/* gradient so text pops on top of the image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-black/5 pointer-events-none" />

                            {/* text overlay on top of the image, Naomi style */}
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <div className="px-6 md:px-12 lg:px-16 py-8 max-w-xl text-white">
                                    <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-[0.65rem] font-medium tracking-[0.18em] uppercase mb-3">
                                        Software Developer · Painter · Photographer
                                    </span>

                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                                        Thoughtful stories in code, paint & photographs.
                                    </h2>

                                    <p className="text-sm md:text-base text-white/85 mb-5">
                                        From autumn streets to quiet libraries and city views – these are
                                        the little moments that inspire my work.
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                                            <Link to="/development">
                                                <Code2 className="mr-2 h-5 w-5" />
                                                See projects
                                            </Link>
                                        </Button>
                                        <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                                            <Link to="/photography">
                                                <Camera className="mr-2 h-5 w-5" />
                                                View photography gallery
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* dots / slide indicators in the bottom-right like 1 2 3 4 */}
                            <div className="absolute bottom-6 right-6 flex items-center gap-2">
                                {heroImages.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setActiveHeroIndex(index)}
                                        className={`h-3 w-3 rounded-full border border-white/80 transition-all ${index === activeHeroIndex ? "bg-white w-5" : "bg-white/25"
                                            }`}
                                        aria-label={`Show slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </section>


            {/* About Section */}
            <section
                id="about"
                className="section-padding bg-gradient-to-b from-secondary/10 to-secondary/5"
            >
                <div className="relative max-w-6xl mx-auto space-y-12 overflow-hidden">
                    {/* Top: text + photo collage */}
                    <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-center">
                        {/* Left: text */}
                        <div className="space-y-5">
                            <div className="h-[2px] w-20 md:w-28 rounded-full bg-secondary/20" />
                            <h2 className="text-3xl md:text-4xl font-bold">
                                A multi-disciplinary creator
                            </h2>
                            <p className="text-muted-foreground text-base md:text-lg">
                                I move between development, painting, and photography — combining
                                structure and logic with intuition and color. My work lives where
                                clean interfaces meet warm, human stories.
                            </p>
                            <p className="text-muted-foreground text-sm md:text-base">
                                I love capturing everyday moments, working on thoughtful digital
                                projects, and creating spaces (online and offline) that feel calm,
                                warm, and intentional.
                            </p>
                        </div>

                        {/* Right: photo collage */}
                        <div className="relative w-full max-w-md mx-auto md:mx-0">
                            {/* main image */}
                            <div className="rounded-3xl overflow-hidden shadow-xl border border-border/60 bg-white/70">
                                <img
                                    src={photo14}
                                    alt="Ana sitting outside with coffee in autumn leaves"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* small overlay image */}
                            <div className="absolute -right-6 bottom-[-3rem] w-40 md:w-48 rounded-3xl overflow-hidden shadow-lg border border-border/60 bg-white/80">
                                <img
                                    src={photo11}
                                    alt="Ana reading in a library armchair"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Three small cards */}
                    <div className="grid gap-6 md:grid-cols-3">
                        <Card className="p-6 md:p-7 hover-lift border border-border/80 bg-white/70">
                            <Code2 className="h-8 w-8 mb-3 text-primary" />
                            <h3 className="text-lg font-semibold mb-2">Software Developer</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Building clean, maintainable web apps with a focus on usability,
                                performance, and thoughtful front-end details.
                            </p>
                        </Card>
                        <Card className="p-6 md:p-7 hover-lift border border-border/80 bg-white/70">
                            <Palette className="h-8 w-8 mb-3 text-secondary" />
                            <h3 className="text-lg font-semibold mb-2">Painter</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Exploring color, texture, and emotion through pieces inspired by
                                nature, faith, and everyday life.
                            </p>
                        </Card>
                        <Card className="p-6 md:p-7 hover-lift border border-border/80 bg-white/70">
                            <Camera className="h-8 w-8 mb-3 text-accent" />
                            <h3 className="text-lg font-semibold mb-2">Photographer</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Capturing candid, cinematic moments with a soft, film-inspired
                                aesthetic.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Development Section */}
            <section id="dev" className="section-padding bg-[#fdf7ff]">
                <div className="max-w-6xl mx-auto space-y-10">
                    <div className="text-center space-y-4">
                        {/* Lilac Mist heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-[#dac2e2]">
                            Software Development
                        </h2>
                        {/* Soft neutral text */}
                        <p className="text-[#7d6a92] max-w-2xl mx-auto">
                            I enjoy turning ideas into intuitive interfaces and reliable
                            systems, from pixel to database.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-start">
                        {/* Left card – Rosy Glow accents */}
                        <Card className="p-7 md:p-8 border border-[#f1c6d9] bg-white/90 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-[#4a3059]">
                                Focus &amp; Approach
                            </h3>
                            <p className="text-sm md:text-base text-[#7d6a92] mb-5 leading-relaxed">
                                I care about thoughtful UI, readable code, and collaboration.
                                Most of my work is in modern web stacks — especially TypeScript
                                and React — but I’m comfortable moving across the stack when
                                needed.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Front-end development",
                                    "Component libraries",
                                    "Design systems",
                                    "API integration",
                                    "Testing & QA",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 rounded-full bg-[#fef4f9] border border-[#f1c6d9] text-xs font-medium text-[#d481a6]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Card>

                        {/* Right card – Daydream Blue accents */}
                        <Card className="p-7 md:p-8 border border-[#c7d7e8] bg-[#f7fbff] shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-[#384763]">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {[
                                    "React",
                                    "TypeScript",
                                    "Vite",
                                    "Node.js",
                                    "C# / .NET",
                                    "Python",
                                    "SQL",
                                    "Git & GitHub",
                                    "UI/UX",
                                    "Testing",
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-full bg-white text-xs font-medium text-[#4b5c78] border border-[#c7d7e8]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Button – Candy Blush outline */}
                <div className="mt-8 flex justify-center">
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-[#f1c6d9] text-[#f1c6d9] hover:bg-[#f1c6d9] hover:text-[#4c3046]"
                    >
                        <Link to="/development">
                            See projects
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Skills Section */}
            <section
                id="skills"
                className="py-12 md:py-16 px-6 md:px-12 bg-white"
            >
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#f1c6d9]">
                            Skills
                        </h2>
                        <p className="text-sm md:text-base text-[#eeb3d0]">
                            Where clean code, testing, and thoughtful product thinking come together.
                        </p>
                    </div>

                    {/* icon row – now properly centered */}
                    <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                        {/* Front-end */}
                        <div className="w-40 flex flex-col items-center text-center space-y-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                                <Code2 className="h-6 w-6 text-[#c58ab8]" />
                            </div>
                            <h3 className="text-sm font-semibold tracking-wide uppercase text-[#f1c6d9] tracking-[0.18em]">
                                Front-end
                            </h3>
                            <p className="text-xs leading-relaxed text-[#eeb3d0]">
                                React, TypeScript, Vite, single-page apps.
                            </p>
                        </div>

                        {/* Component Libraries */}
                        <div className="w-40 flex flex-col items-center text-center space-y-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                                <LayoutTemplate className="h-6 w-6 text-[#c58ab8]" />
                            </div>
                            <h3 className="text-sm font-semibold tracking-wide uppercase text-[#f1c6d9] tracking-[0.18em]">
                                Component Libraries
                            </h3>
                            <p className="text-xs leading-relaxed text-[#eeb3d0]">
                                Blazor / MudBlazor, reusable UI systems.
                            </p>
                        </div>

                        {/* Testing & QA */}
                        <div className="w-40 flex flex-col items-center text-center space-y-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                                <BugPlay className="h-6 w-6 text-[#c58ab8]" />
                            </div>
                            <h3 className="text-sm font-semibold tracking-wide uppercase text-[#f1c6d9] tracking-[0.18em]">
                                Testing &amp; QA
                            </h3>
                            <p className="text-xs leading-relaxed text-[#eeb3d0]">
                                Selenium, bUnit, automation flows.
                            </p>
                        </div>

                        {/* APIs & Data */}
                        <div className="w-40 flex flex-col items-center text-center space-y-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                                <Database className="h-6 w-6 text-[#c58ab8]" />
                            </div>
                            <h3 className="text-sm font-semibold tracking-wide uppercase text-[#f1c6d9] tracking-[0.18em]">
                                APIs &amp; Data
                            </h3>
                            <p className="text-xs leading-relaxed text-[#eeb3d0]">
                                C# / .NET, REST APIs, SQL, data layers.
                            </p>
                        </div>

                        {/* Cloud & Dev Tools */}
                        <div className="w-40 flex flex-col items-center text-center space-y-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                                <CloudCog className="h-6 w-6 text-[#c58ab8]" />
                            </div>
                            <h3 className="text-sm font-semibold tracking-wide uppercase text-[#f1c6d9] tracking-[0.18em]">
                                Cloud &amp; Dev Tools
                            </h3>
                            <p className="text-xs leading-relaxed text-[#eeb3d0]">
                                Azure, Git, CI/CD, dev-friendly workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Painting teaser on home page */}
            <section id="painting" className="section-padding bg-[#fff7fb]">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#f1c6d9]">
                        Painting Portfolio
                    </h2>
                    <p className="text-base md:text-lg text-[#8c6a83] max-w-2xl mx-auto">
                        Soft, symbolic paintings inspired by nature, travel, and quiet moments of
                        reflection — currently in progress as I build a new collection.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#f1c6d9] hover:bg-[#e3abc2] text-[#4c3046] border-0"
                    >
                        <Link to="/painting">Explore painting portfolio</Link>
                    </Button>
                </div>
            </section>



            {/* Photography teaser on home page */}
            <section id="photography" className="section-padding bg-[#f7fbff]">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#c7d7e8]">
                        Photography
                    </h2>
                    <p className="text-base md:text-lg text-[#7a6d8c] max-w-2xl mx-auto">
                        Soft, film-inspired photos that capture autumn walks, quiet rooms, and the
                        in–between moments that feel like little movie scenes.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="mt-2 bg-[#c7d7e8] hover:bg-[#b4c6dd] text-[#31425b] border-0"
                    >
                        <Link to="/photography">Browse photography gallery</Link>
                    </Button>
                </div>
            </section>



            {/* Contact Section */}
            <section id="contact" className="section-padding bg-background">
                <div className="max-w-4xl mx-auto">
                    <Card className="p-10 md:p-12 bg-white/80 border border-border/80 shadow-xl rounded-3xl">
                        <div className="text-center space-y-4 mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Let's Connect
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                                Open to collaborations, freelance work, or just a conversation
                                about design, art, or code.
                            </p>
                        </div>

                        <div className="flex gap-6 justify-center flex-wrap">
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="border-primary/50 hover:bg-primary hover:text-white"
                            >
                                <a href="mailto:anabindiu11@gmail.com">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Email
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="border-secondary/50 hover:bg-secondary hover:text-white"
                            >
                                <a
                                    href="https://github.com/anabindiu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="mr-2 h-5 w-5" />
                                    GitHub
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="border-accent/50 hover:bg-accent hover:text-white"
                            >
                                <a
                                    href="https://www.linkedin.com/in/ana-bindiu-073659212/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="mr-2 h-5 w-5" />
                                    LinkedIn
                                </a>
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border bg-background/90">
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-muted-foreground">
                    <span>© 2025 Ana Bindiu. All rights reserved.</span>

                    <span className="flex items-center gap-1 text-center md:text-right">
                        Designed with a mix of
                        <span className="font-semibold text-primary">code</span>,
                        <span className="font-semibold text-secondary">paint</span>,
                        and coffee.
                    </span>
                </div>
            </footer>

        </div>
    );
};

export default Index;
