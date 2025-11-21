import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Development = () => {
    return (
        <div className="min-h-screen bg-[#fdf7ff] text-[#4a3059]">
            {/* top nav with brand + tabs */}
            <nav className="border-b border-[#f1c6d9]/40 bg-[#fff9fd]/90 backdrop-blur">
                {/* back + brand row */}
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#f1c6d9]"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>
                </div>

                {/* tabs row */}
                <div className="max-w-6xl mx-auto px-6 pb-4 flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
                    <a href={`${import.meta.env.BASE_URL}#about`} className="hover:text-[#f1c6d9] transition-colors">
                        About
                    </a>
                    {/* active tab */}
                    <span className="text-[#f1c6d9]">
                        Development
                    </span>
                    <Link
                        to="/painting"
                        className="hover:text-[#f1c6d9] transition-colors"
                    >
                        Painting
                    </Link>
                    <Link
                        to="/photography"
                        className="hover:text-[#f1c6d9] transition-colors"
                    >
                        Photography
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-[#f1c6d9] transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 pb-16 pt-10 space-y-10">
                {/* Heading */}
                <div className="space-y-4 max-w-3xl">
                    <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#d481a6]">
                        ⌘ Development projects
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#f1c6d9]">
                        Turning ideas into thoughtful, maintainable
                        <br />
                        products.
                    </h1>
                    <p className="text-base md:text-lg text-[#7d6a92]">
                        I enjoy building interfaces that feel calm and intuitive, while
                        keeping the codebase clean and collaborative. Here are a few
                        projects that reflect how I think about structure, UX, and
                        reliability.
                    </p>
                </div>

                {/* project cards */}
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Wanderquest */}
                    <Card className="p-6 md:p-7 bg-white/95 border border-[#f1c6d9] shadow-sm">
                        <h2 className="text-lg md:text-xl font-semibold text-[#4a3059] mb-2">
                            Wanderquest – Travel Challenge App
                        </h2>
                        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#d481a6] mb-3">
                            Front-end &amp; Product Design · React
                        </p>
                        <p className="text-sm text-[#7d6a92] mb-4 leading-relaxed">
                            Concept app that turns exploring cities into interactive
                            challenges: combining maps, prompts, and rewards with a playful
                            visual style.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "TypeScript", "UI/UX", "Side project"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full bg-[#fef4f9] border border-[#f1c6d9] text-xs font-medium text-[#d481a6]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>

                    {/* Portfolio site */}
                    <Card className="p-6 md:p-7 bg-white/95 border border-[#c7d7e8] shadow-sm">
                        <h2 className="text-lg md:text-xl font-semibold text-[#384763] mb-2">
                            Personal Portfolio – This website
                        </h2>
                        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7ea2cf] mb-3">
                            Design &amp; Development · Vite · React
                        </p>
                        <p className="text-sm text-[#56627c] mb-4 leading-relaxed">
                            A home for my development, painting, and photography work:
                            crafted with a soft aesthetic, reusable components, and a focus
                            on clear storytelling.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Vite", "Design systems"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full bg-[#f7fbff] border border-[#c7d7e8] text-xs font-medium text-[#4b5c78]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <Button
                        variant="outline"
                        className="border-[#c7d7e8] text-[#4b5c78] hover:bg-[#c7d7e8] hover:text-white flex items-center gap-2"
                    >
                        <ExternalLink className="h-4 w-4" />
                        Detailed case studies coming soon
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default Development;
